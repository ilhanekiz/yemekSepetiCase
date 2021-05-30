import React from 'react';
import './MenuList.scss';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

const MenuList = (props) => {
  const { title, menus } = props.data;

  const onSubmit = (number, menuName, description, price, id) => {
    props.onSubmit(number, menuName, description, price, id);
  };

  return (
    <div className="menu-list">
      <h2 className="head">{title}</h2>
      {menus && menus.map((menu) => <Menu data={menu} key={menu.id} onSubmit={onSubmit} />)}
    </div>
  );
};

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

MenuList.defaultProps = {};

export default MenuList;
