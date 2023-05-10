const axios = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');

const buscapeProducts = async (category, { id: searchId, description: search }) => {
  const buscapeCategory = `search?q=${category} ${search}`;
  const siteUrl = 'https://buscape.com.br';
  const { data } = await axios.get(`${siteUrl}/${buscapeCategory}`);
  const $ = cheerio.load(data);
  const allProducts = [];
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

  const getValidImage = async (product) => {
    const fileData = await axios.get(product.linkUrl);
    const $$ = cheerio.load(fileData.data);
    const imageSrc = $$('.ProductPageBody_ContentBody__De_1M')
      .find('div:nth-child(2) img')
      .attr('src');
    return {
      ...product,
      imageUrl: imageSrc,
    };
  };

  const images = await Promise.all(filteredProducts.map(getValidImage));

  return images;
};

module.exports = buscapeProducts;
