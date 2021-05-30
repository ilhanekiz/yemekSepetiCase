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

  const handleBasket = (paramsNumber, paramsMenuName, paramsDescription, paramsPrice, paramsId) => {
    const currentBasket = [...basket];

    if (currentBasket.length === 0) {
      // Sepet boş ise direk gelen ürün ile setleyelim.
      currentBasket.push({
        number: paramsNumber,
        menuName: paramsMenuName,
        description: paramsDescription,
        price: paramsNumber * paramsPrice,
        id: paramsId,
      });
      setBasket(currentBasket);
      return;
    }

    // Sepette daha önceden aynı ürün var ise onu alıyorum.
    const matchingProduct = currentBasket.find((food) => food.id === paramsId);

    if (typeof matchingProduct === 'undefined') {
      // Eğer eşleşen bir ürün yok ise
      currentBasket.push({
        number: paramsNumber,
        menuName: paramsMenuName,
        description: paramsDescription,
        price: paramsNumber * paramsPrice,
        id: paramsId,
      });
      setBasket(currentBasket);
    } else {
      // Eğer ürün eşleşmiş ise
      matchingProduct.number += paramsNumber;
      matchingProduct.price = matchingProduct.number * paramsPrice;
      const manipuleBasket = currentBasket.filter((food) => food.id !== paramsId);
      manipuleBasket.push(matchingProduct);
      setBasket(manipuleBasket);
    }
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
