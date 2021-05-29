import React from 'react';
import Basket from '../../components/Basket/Basket';
import RestaurantBanner from '../../components/RestaurantBanner/RestaurantBanner';
import MenuList from '../../components/MenuList/MenuList';
import './RestaurantDetail.scss';

export const dummyRestaurantBannerData = {
  bgImageUrl: 'src/assets/images/burger.jpeg',
  logo: 'src/assets/images/restaurant-logo.png',
  title: 'X-Force Burger & Pizza, Arnavutköy İlçesi(Mustafa Kemal Paşa Mah.)',
  infoData: [
    { title: 'Hız', point: '8,7' },
    { title: 'Servis', point: '8,7' },
    { title: 'Lezzet', point: '8,7' },
  ],
  delivery: [
    { icon: 'src/assets/images/icons/min-price.png', title: 'Min. Tutar', subTitle: '50,00 TL' },
    { icon: 'src/assets/images/icons/motor.png', title: 'Servis Süresi', subTitle: '20-30 dk' },
  ],
  isSuperRestaurant: true,
};

export const dummyMenuList = [
  {
    title: 'Burgerler',
    menus: [
      {
        menuName: 'Classic American Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
      {
        menuName: 'Double Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1250,
      },
      {
        menuName: 'Hamburger Menü',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 2000,
      },
      {
        menuName: 'Queens Burger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
    ],
  },
  {
    title: 'Burgerler',
    menus: [
      {
        menuName: 'Classic American Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
      {
        menuName: 'Double Cheeseburger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1250,
      },
      {
        menuName: 'Hamburger Menü',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 2000,
      },
      {
        menuName: 'Queens Burger',
        description: 'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
        price: 1750,
      },
    ],
  },
];

const RestaurantDetail = () => (
  <section className="container restaurant-detail">
    <Basket />
    <div className="main-content">
      <RestaurantBanner
        data={dummyRestaurantBannerData}
      />
      {dummyMenuList && dummyMenuList.map((menus, index) => <MenuList data={menus} key={index} />)}
    </div>
  </section>
);

export default RestaurantDetail;
