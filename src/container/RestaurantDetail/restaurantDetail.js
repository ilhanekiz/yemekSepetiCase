import React from 'react';
import Basket from '../../components/Basket/Basket';
import RestaurantBanner from '../../components/RestaurantBanner/RestaurantBanner';
import MenuList from '../../components/MenuList/MenuList';
import './RestaurantDetail.scss';

import { MockRestaurantBannerData, MockMenuList } from '../../data/mock';

const RestaurantDetail = () => {
  const onSubmit = (number, menuName, description, price) => {
    console.log('detail');
    console.log(number, menuName, description, price);
  };

  return (
    <section className="container restaurant-detail">
      <Basket />
      <div className="main-content">
        <RestaurantBanner
          data={MockRestaurantBannerData}
        />
        {MockMenuList && MockMenuList.map((menus) => (
          <MenuList
            data={menus}
            key={menus.id}
            onSubmit={onSubmit}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantDetail;
