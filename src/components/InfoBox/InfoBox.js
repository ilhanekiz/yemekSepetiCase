import React from 'react';
import './InfoBox.scss';
import PropTypes from 'prop-types';

const InfoBox = (props) => {
  const { title, point } = props.infoData;
  return (
    <div className="info-box">
      <span className="title">{title}</span>
      <span className="point">{point}</span>
    </div>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
};

InfoBox.defaultProps = {};

export default InfoBox;
