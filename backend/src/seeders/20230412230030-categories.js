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
          image: 'https://img.freepik.com/fotos-gratis/colecao-close-up-de-produtos-de-maquiagem-e-beleza_23-2148620012.jpg?w=2000',
        }, {
          id: 5,
          name: 'smartphones',
          image: 'https://i.zst.com.br/thumbs/12/29/19/-846658799.jpg',
        }, {
          id: 6,
          name: 'iphone',
          image: 'https://www.menosfios.com/wp-content/uploads/2023/03/akrales_210917_4760_0175.jpg',
        }, {
          id: 7,
          name: 'esporte',
          image: 'https://www.janguiediniz.com.br/img/1/1217/blog/n/b30fa974000098fb12ae142511911053.jpg',
        }, {
          id: 8,
          name: 'ferramentas',
          image: 'https://obrasconstrucaocivil.com/wp-content/uploads/2021/11/fonte-sweestest-home.jpg',
        }, {
          id: 9,
          name: 'moveis',
          image: 'https://images.tcdn.com.br/img/img_prod/836870/rack_c_painel_p_tv_ate_70_e_com_led_michigan_lukaliam_moveis_1203_1_644369203dcac4ba259d2eea05b27ebe.jpg',
        }, {
          id: 10,
          name: 'console de video game',
          image: 'https://planejadorweb.com.br/wp-content/uploads/2021/10/Melhores-Consoles-de-Videogame.jpeg',
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
          image: 'https://www.pontotel.com.br/wp-content/uploads/2021/12/auxilio-academia.jpg',
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
