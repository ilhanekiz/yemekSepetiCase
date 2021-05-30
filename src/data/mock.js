exports.MockRestaurantBannerData = {
  bgImageUrl: 'src/assets/images/burger.jpeg',
  logo: 'src/assets/images/restaurant-logo.png',
  title: 'X-Force Burger & Pizza, Arnavutköy İlçesi(Mustafa Kemal Paşa Mah.)',
  infoData: [
    { id: 0, title: 'Hız', point: '8,7' },
    { id: 1, title: 'Servis', point: '8,7' },
    { id: 2, title: 'Lezzet', point: '8,7' },
  ],
  delivery: [
    {
      id: 0, icon: 'src/assets/images/icons/min-price.png', title: 'Min. Tutar', subTitle: '50,00 TL',
    },
    {
      id: 1, icon: 'src/assets/images/icons/motor.png', title: 'Servis Süresi', subTitle: '20-30 dk',
    },
  ],
  isSuperRestaurant: true,
};

exports.MockMenuList = [
  {
    productListId: 1,
    title: 'Burgerler',
    menus: [
      {
        id: 1,
        menuName: 'Classic American Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
      {
        id: 2,
        menuName: 'Double Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1250,
      },
      {
        id: 3,
        menuName: 'Hamburger Menü',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 2000,
      },
      {
        id: 4,
        menuName: 'Queens Burger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 2500,
      },
    ],
  },
  {
    productListId: 2,
    title: 'Burgerler',
    menus: [
      {
        id: 5,
        menuName: 'Classic American Cheeseburger v2',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
      {
        id: 6,
        menuName: 'Double Cheeseburger v2',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1250,
      },
      {
        id: 7,
        menuName: 'Hamburger Menü v2',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 2000,
      },
      {
        id: 8,
        menuName: 'Queens Burger v2',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 3550,
      },
    ],
  },
];
