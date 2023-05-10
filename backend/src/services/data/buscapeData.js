const axios = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');

const buscapeProducts = async (category, { id: searchId, description: search }) => {
  const buscapeCategory = `search?q=${category} ${search}`;
  const siteUrl = 'https://buscape.com.br';
  const { data } = await axios.get(`${siteUrl}/${buscapeCategory}`);
  const $ = cheerio.load(data);
  const allProducts = [];
  const productsList = [];
  const { id } = await Category.findOne({ where: { name: category } });

  $('.col-lg-9 div').each(async (e, i) => {
    const getLink = $(i).find('.SearchCard_ProductCard_Inner__7JhKb').attr('href') || '';

    if (!getLink.includes('buscape')) {
      const product = {
        title: $(i).find('a h2').text(),
        categoryId: id,
        siteId: 2,
        searchId,
        price: $(i)
          .find('a .SearchCard_ProductCard_Description__fGXI3 .Text_Text__h_AF6.Text_MobileHeadingS__Zxam2')
          .text(),
        linkUrl: siteUrl + getLink,
      };
      allProducts.push(product);
    }
  });

  const filteredProducts = allProducts.filter(
    (product) => product.price && typeof product.title === 'string' && product.title.length < 100,
  );

  const getProductData = async (product) => {
    const fileData = await axios.get(product.linkUrl);
    const $$ = cheerio.load(fileData.data);
    const imageSrc = $$('.ProductPageBody_ContentBody__De_1M')
      .find('div:nth-child(2) img')
      .attr('src');

    $$('.Offers_OfferListWrapper__f1By_').each(async (_e, i) => {
      const bestOffer = {
        info: $$(i).find('li .OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a .OfferPrice_PriceContent__MW3Ty').text(),
        productImg: $$(i).find('li .OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a img').attr('src'),
        company: $$(i).find('li .OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM .OfferCard_OfferCardFooter__9dsDN a h3').text(),
        companyImg: $$(i).find('li .OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM .OfferCard_OfferCardFooter__9dsDN a div img').attr('src'),
        link: $$(i).find('li .OfferCard_OfferCardWrapper__3SbhD .OfferCard_WithBestOffer__zXEaM  a').attr('href') || '',
      };
      productsList.push(bestOffer);
    });

    return {
      ...product,
      imageUrl: imageSrc,
      products: productsList,
    };
  };

  const productData = await Promise.all(filteredProducts.map(getProductData));

  return productData;
};

module.exports = buscapeProducts;
