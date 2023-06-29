export const productsData = [
    {
        id:1,
        name:"Sephiroth figura",
        brand: "Square Enix",
        subTitle:"Figura de Sephiroth, antagonista de Final fantasy 7 - Square Enix",
        bid:250,
        category: "barato",
        img: "https://s.pacn.ws/1/p/yq/final-fantasy-vii-remake-statuette-sephiroth-625009.1.jpg?v=qm63zt&quality=72&width=1024&crop=998,998",
    },
    {
        id:2,
        name:"Dark Souls 3 ",
        brand: "Bandai Namco",
        subTitle:"Dark souls 3 edicion limitada - Bandai Namco",
        bid:500,
        category: "accesible",
        img: "https://www.retroplace.com/pics/ps4/packshots/157108--dark-souls-iii.png",
    },
    {
        id:3,
        name:"Monster Hunter",
        brand: "Capcom",
        subTitle:"Monster hunter world IB collecionista - Capcom",
        bid: 750,
        category: "accesible",
        img: "https://www.siliconera.com/wp-content/uploads/2019/05/monsterhunterworldicebornecollectorseditionjapan.jpg",
    },
    {
        id:4,
        name:"Tarjetas de regalo",
        brand: "Consolas/PC",
        subTitle:"Tarjetas de regalo surtidas y variadas para regalar",
        bid: 350,
        category: "barato",
        img: "https://wealthofgeeks.com/wp-content/uploads/2021/08/free_gift_cards_MSN.png.webp",
    },
    {
        id:5,
        name:"Colleccion FF 1-15",
        brand: "Square Enix",
        subTitle:"Vive tod la saga de Final Fantasy - Square Enix",
        bid: 3000,
        category: "caro",
        img: "https://www.gamespot.com/a/uploads/scale_medium/mig/0/3/0/9/2280309-FFUltimateBox_09728_screen.jpg",
    },
    {
        id:6,
        name:"Silent Hill Coleccion",
        brand: "Konami",
        subTitle:"Explora toda la saga Silent Hill - Konami ",
        bid: 2500,
        category: "caro",
        img: "https://vgboxart.com/boxes/PS4/75114-silent-hill-revival-collection.jpg",
    },
];



export const Products = productsData.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});

