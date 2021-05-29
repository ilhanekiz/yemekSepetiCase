import React from 'react';
import Basket from '../../components/Basket/Basket';
import RestaurantBanner from '../../components/RestaurantBanner/RestaurantBanner';
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
    { title: 'Hız', point: '8,7' },
    { title: 'Servis', point: '8,7' },
    { title: 'Lezzet', point: '8,7' },
  ],
};

const RestaurantDetail = () => (
  <section className="container restaurant-detail">
    <Basket />
    <RestaurantBanner
      data={dummyRestaurantBannerData}
    />
  </section>
);

export default RestaurantDetail;
