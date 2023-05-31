const axios = require('axios');
const cheerio = require('cheerio');
const { Search } = require('../../models');

const MAX_RETRY_ATTEMPTS = 3;

const buscapeProducts = async (category, search) => {
  const { id } = await Search.create({
    description: search,
  });
  const buscapeCategory = category ? `search?q=${category} ${search}` : `search?q=${search}`;
  const siteUrl = 'https://buscape.com.br';
  const { data } = await axios.get(`${siteUrl}/${buscapeCategory}`);
  const $ = cheerio.load(data);
  const allProducts = [];
  $('.col-lg-9 .Hits_Wrapper__3q_7P .Paper_Paper__HIHv0').each((e, i) => {
    const getLink = $(i).find('.SearchCard_ProductCard_Inner__7JhKb').attr('href') || '';
    const product = {
      title: $(i).find('a h2').text(),
      price: $(i)
        .find('a .SearchCard_ProductCard_Description__fGXI3 .Text_Text__h_AF6.Text_MobileHeadingS__Zxam2')
        .text(),
      linkUrl: !getLink.includes('buscape') ? siteUrl + getLink : getLink,
      searchId: id,
    };
    allProducts.push(product);
  });

  const filteredProducts = allProducts.filter(
    (product) => product.price && typeof product.title === 'string' && product.title.length < 100,
  );

  const getProductData = async (product, attempt = 1) => {
    try {
      const fileData = await axios.get(product.linkUrl, { timeout: 5000 });
      const $$ = cheerio.load(fileData.data);
      const productsList = [];
      const imageSrc = $$('.ProductPageBody_ContentBody__De_1M')
        .find('div:nth-child(2) img')
        .attr('src');

      $$('.ProductPageBody_ContentBody__De_1M ul li').each((_e, i) => {
        const bestOffer = {
          info: $$(i).find('.OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a .OfferPrice_PriceContent__MW3Ty').text(),
          productImg: $$(i).find('.OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a img').attr('src'),
          company: $$(i).find('.OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM .OfferCard_OfferCardFooter__9dsDN a h3').text(),
          companyImg: $$(i).find('.OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM .OfferCard_OfferCardFooter__9dsDN a div img').attr('src'),
          link: $$(i).find('.OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a').attr('href') || '',
        };
        productsList.push(bestOffer);
      });

      const filteredProd = productsList.filter(({
        info, productImg, company, companyImg, link,
      }) => info && productImg && company && companyImg && link);

      if (filteredProd.length === 0 && attempt < MAX_RETRY_ATTEMPTS) {
        return getProductData(product, attempt + 1);
      }

      return {
        ...product,
        imageUrl: imageSrc,
        products: filteredProd,
      };
    } catch (error) {
      if (attempt < MAX_RETRY_ATTEMPTS) {
        return getProductData(product, attempt + 1);
      }

      throw error;
    }
  };

  const limitReturn = () => {
    const limitedProducts = filteredProducts.slice(0, 16);
    if (limitReturn.length <= 16) return limitedProducts;
    return limitReturn();
  };

  const getProducts = limitReturn();

  const productData = await Promise.all(getProducts.map(getProductData));

  return productData;
};

module.exports = buscapeProducts;
