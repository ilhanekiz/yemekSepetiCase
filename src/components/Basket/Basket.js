import React from 'react';
import './Basket.scss';
import PropTypes from 'prop-types';
import BasketFood from '../BasketFood/BasketFood';

const Basket = (props) => {
  const { data } = props;
  const isBasketMode = data && data.length > 0;
  const getNumber = (total, num) => total + num;

  const handleTotalPrice = (foods) => {
    const prices = [];
    foods.map((food) => prices.push(food.price));
    const totalPrice = prices.reduce(getNumber);
    return `${(totalPrice / 100).toFixed(2).replace('.', ',')} TL`;
  };

  return (
    <div id="basket">
      <div className="head">
        <span className="title">YEMEK SEPETİM</span>
        <span className="sub-title">Şişli (Esentepe Mah - Plazalar)</span>
      </div>
      <div className="content">
        {!isBasketMode && (
        <div className="passive-mode">
          <img src="src/assets/images/basket.png" alt="Basket" />
          <span className="text">Sepetiniz Henüz Boş</span>
        </div>
        )}

        {isBasketMode && (
          <div className="active-mode">
            {data && data.map((food) => <BasketFood data={food} />)}

            <div className="total-amount">
              <span>Toplam</span>
              <span>{handleTotalPrice(data)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Basket.propTypes = {
  data: PropTypes.array.isRequired,
};

Basket.defaultProps = {};

export default Basket;
