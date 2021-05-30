import React from 'react';
import './Basket.scss';
import BasketFood from '../BasketFood/BasketFood';

const Basket = (props) => {
  debugger;
  const deneme = () => {

  };
  return (
    <div id="basket">
      <div className="head">
        <span className="title">YEMEK SEPETİM</span>
        <span className="sub-title">Şişli (Esentepe Mah - Plazalar)</span>
      </div>
      <div className="content">
        {/* <div className="passive-mode">
          <img src="src/assets/images/basket.png" alt="Basket" />
          <span className="text">Sepetiniz Henüz Boş</span>
        </div> */}
        <div className="active-mode">
          <BasketFood />
          <BasketFood />
          <BasketFood />
          <div className="total-amount">
            <span>Toplam</span>
            <span>80,50 TL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
