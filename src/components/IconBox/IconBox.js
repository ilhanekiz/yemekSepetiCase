import React from 'react';
import './IconBox.scss';
import PropTypes from 'prop-types';

const IconBox = (props) => {
  const { icon, title, point } = props.infoData;
  return (
    <div className="icon-box">
      <img src={icon} alt="Icon" />
      <span className="title">{title}</span>
      <span className="sub-title">{point}</span>
    </div>
  );
};

IconBox.propTypes = {
  title: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

IconBox.defaultProps = {};

export default IconBox;
