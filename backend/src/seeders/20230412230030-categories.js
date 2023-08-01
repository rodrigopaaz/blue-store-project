module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: 1,
          name: 'impressoras',
          image: 'https://www.impressora.com.br/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/l/6/l6270_1.jpg',
        }, {
          id: 2,
          name: 'automotivo',
          image: 'https://img.freepik.com/vetores-premium/roda-de-pneu-de-carro-isolada_33869-135.jpg?w=2000',
        }, {
          id: 3,
          name: 'smart tvs',
          image: 'https://gbarbosa.vtexassets.com/arquivos/ids/159538/3176d351-48eb-4026-8052-894fdcb926b0.png?v=637751750581000000',
        }, {
          id: 4,
          name: 'beleza',
          image: 'https://a-static.mlcdn.com.br/800x560/maleta-kit-de-maquiagens-e-itens-de-beleza-c-12-itens-lika-online/likaonline/1657-4733/6612b3dc952a2ea1eb58984eefbd0762.jpeg',
        }, {
          id: 5,
          name: 'smartphones',
          image: 'https://5.imimg.com/data5/NN/PW/XN/SELLER-8587078/11-500x500.jpg',
        }, {
          id: 6,
          name: 'iphone',
          image: 'https://www.iplace.com.br/ccstore/v1/images/?source=/file/v8169653103958540939/products/222255.00-apple-iphone-14-pro-128gb-pretoespacial-mpxv3be.jpg',
        }, {
          id: 7,
          name: 'petshop',
          image: 'https://static.wixstatic.com/media/cef25d_9f1412acd93145939bb537e85c4cb393~mv2.png/v1/fill/w_640,h_558,fp_0.48_0.29,lg_1,q_85,enc_auto/cef25d_9f1412acd93145939bb537e85c4cb393~mv2.png',
        }, {
          id: 8,
          name: 'jardinagem',
          image: 'https://assets.tramontina.com.br/upload/tramon/imagens/MUL/78100801PDM001G.jpg',
        }, {
          id: 9,
          name: 'moveis',
          image: 'https://images.tcdn.com.br/img/img_prod/984241/guarda_roupa_turim_3_portas_de_correr_com_1_espelho_bianchi_moveis_58_1_fc47d9e020bc00b690b42c59a18e1390.jpg',
        }, {
          id: 10,
          name: 'console de video game',
          image: 'https://tekshanghai.com/wp-content/uploads/2020/09/SONY-PlayStation-5-Console_6.jpg',
        }, {
          id: 11,
          name: 'jogos ps4',
          image: 'https://cdn.awsli.com.br/300x300/241/241991/produto/122597245/7796c502a4.jpg',
        }, {
          id: 12,
          name: 'jogos ps5',
          image: 'https://images-americanas.b2w.io/produtos/4749156568/imagens/jogo-horizon-forbidden-west-ps4/4749156568_1_xlarge.jpg',
        }, {
          id: 13,
          name: 'jogos xbox one',
          image: 'https://cdn.awsli.com.br/600x450/241/241991/produto/174350213/fa960b82b6.jpg',
        }, {
          id: 14,
          name: 'academia',
          image: 'https://images.tcdn.com.br/img/img_prod/450774/kettlebell_32kg_ultrawod_697_3_4ed8e4b70c6b481f65790194580524b9.jpg',
        }, {
          id: 15,
          name: 'geladeira',
          image: 'https://cookeletroraro.vteximg.com.br/arquivos/ids/173041-1000-1000/geladeira-samsung.jpg?v=637163343171700000',
        }, {
          id: 16,
          name: 'notebook',
          image: 'https://www.fujioka.com.br/arquivos/ids/165691-1000-1000/a_571184_alta_2.png?v=637360456698970000',
        }, {
          id: 17,
          name: 'macbook',
          image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1670455592623',
        }, {
          id: 18,
          name: 'cadeira gamer',
          image: 'https://ecadeiraslegacy.vteximg.com.br/arquivos/ids/155903/cadeira-gamer-indianapolis-azul-e-preta-gaidpa-0069-3.jpg?v=637449582230030000',
        },
      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
