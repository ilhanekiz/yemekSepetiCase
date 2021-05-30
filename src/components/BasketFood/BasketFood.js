import React, { useState } from 'react';
import './BasketFood.scss';
import PropTypes from 'prop-types';

const handlePrice = (value) => (value / 100).toFixed(2).replace('.', ',');

const BasketFood = (props) => {
  const { id, menuName, description, number, price } = props.data;
  const [val, setVal] = useState(number);

  const onChangeHandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '') {
      setVal(number);
    } else if (re.test(e.target.value)) {
      setVal(parseInt(e.target.value, 10));
      props.onChange(parseInt(e.target.value, 10), id, (price / number));
    }
  };

  return (
    <div className="basket-food">
      <div className="menu-titles">
        <span className="head">{menuName}</span>
        <p className="desc">{description}</p>
      </div>
      <input className="form-control" type="text" value={number} onChange={(event) => onChangeHandler(event, val)} />
      <div className="price">{`${handlePrice(price)} TL`}</div>
      <i className="delete-icon">x</i>
    </div>
  );
};

BasketFood.propTypes = {
  id: PropTypes.number.isRequired,
  menuName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

BasketFood.defaultProps = {};

export default BasketFood;
