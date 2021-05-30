import React from 'react';
import './BasketFood.scss';
import PropTypes from 'prop-types';

const BasketFood = (props) => {
  const { title, point } = props;
  return (
    <div className="basket-food">
      <div className="menu-titles">
        <span className="head">Vodafone Menu</span>
        <p className="desc">Çok karışık standart boy falan filan</p>
      </div>
      <input className="form-control" type="text" />
      <div className="price">54,50 TL</div>
      <i className="delete-icon">x</i>
    </div>
  );
};

BasketFood.propTypes = {
  title: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
};

BasketFood.defaultProps = {};

export default BasketFood;
