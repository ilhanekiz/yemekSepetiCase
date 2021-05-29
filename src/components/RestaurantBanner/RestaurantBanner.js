import React from 'react';
import './RestaurantBanner.scss';
import PropTypes from 'prop-types';
import InfoBox from '../InfoBox/InfoBox';

const RestaurantBanner = (props) => {
  const { bgImageUrl, logo, title, infoData } = props.data;
  return (
    <div className="restaurant-banner" style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="Restaurant Logo" />
        </div>
        <div className="information">
          <h1 className="title">{title}</h1>
          <div className="content">
            <div className="info-boxes">
              {infoData && infoData.map((info, index) => <InfoBox infoData={info} key={index} />)}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        footer
      </footer>
    </div>
  );
};

RestaurantBanner.propTypes = {
  bgImageUrl: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoData: PropTypes.array.isRequired,
};

RestaurantBanner.defaultProps = {};

export default RestaurantBanner;
