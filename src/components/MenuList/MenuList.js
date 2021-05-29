import React from 'react';
import './MenuList.scss';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

const MenuList = (props) => {
  const { title, menus } = props.data;
  return (
    <div className="menu-list">
      <h2 className="head">{title}</h2>
      {menus && menus.map((menu, index) => <Menu data={menu} key={index} />)}
    </div>
  );
};

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
};

MenuList.defaultProps = {};

export default MenuList;
