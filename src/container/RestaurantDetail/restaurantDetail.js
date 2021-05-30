import React, { useState } from 'react';
import Basket from '../../components/Basket/Basket';
import RestaurantBanner from '../../components/RestaurantBanner/RestaurantBanner';
import MenuList from '../../components/MenuList/MenuList';
import './RestaurantDetail.scss';

import { MockRestaurantBannerData, MockMenuList } from '../../data/mock';

const RestaurantDetail = () => {
  const [basket, setBasket] = useState([]);

  const onSubmit = (number, menuName, description, price, id) => {
    handleBasket(number, menuName, description, price, id);
  };

  const handleBasket = (number, menuName, description, price, id) => {
    const currentBasket = [...basket];
    currentBasket.push({
      number, menuName, description, price, id,
    });
    setBasket(currentBasket);
  };

  return (
    <section className="container restaurant-detail">
      <Basket data={basket} />
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
