import React from 'react';
import './IconBox.scss';
import PropTypes from 'prop-types';

const IconBox = (props) => {
  const { icon, title, subTitle } = props.delivery;
  return (
    <div className="icon-box">
      <img src={icon} alt="Icon" />
      <span className="title">{title}</span>
      <span className="sub-title">{subTitle}</span>
    </div>
  );
};

IconBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

IconBox.defaultProps = {};

export default IconBox;
