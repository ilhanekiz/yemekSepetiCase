import React from 'react';
import './Basket.scss';

const Basket = () => (
  <div id="basket">
    <div className="head">
      <span className="title">YEMEK SEPETİM</span>
      <span className="sub-title">Şişli (Esentepe Mah - Plazalar)</span>
    </div>
    <div className="content">
      <div className="passive-mode">
        <img src="src/assets/images/basket.png" alt="Basket" />
        <span className="text">Sepetiniz Henüz Boş</span>
      </div>
    </div>
  </div>
);

export default Basket;
