import React from 'react';
import './Menu.scss';
import PropTypes from 'prop-types';

import Count from '../Count/Count';

const handlePrice = (value) => (value / 100).toFixed(2).replace('.', ',');

const Menu = (props) => {
  const { menuName, description, price } = props.data;
  return (
    <div className="menu">
      <Count />
      <div className="text-content">
        <span className="title">{menuName}</span>
        <span className="description">{description}</span>
      </div>
      <div className="price">
        {`${handlePrice(price)} TL`}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Menu.defaultProps = {};

export default Menu;
