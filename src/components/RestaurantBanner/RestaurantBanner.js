import React from 'react';
import './RestaurantBanner.scss';
import PropTypes from 'prop-types';
import InfoBox from '../InfoBox/InfoBox';
import IconBox from '../IconBox/IconBox';

const RestaurantBanner = (props) => {
  const { bgImageUrl, logo, title, infoData, delivery, isSuperRestaurant } = props.data;
  return (
    <div className="restaurant-banner" style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="Restaurant Logo" />
        </div>
        <div className="information">
          <h1 className="title">{title}</h1>
          <div className="content">
            {isSuperRestaurant && (
            <div className="super-restaurant-icon">
              <img src="src/assets/images/icons/star.png" alt="Super Restaurant" />
            </div>
            )}
            <div className="info-boxes">
              {infoData.map((info) => <InfoBox infoData={info} key={info.id} />)}
            </div>
            <div className="delivery">
              {delivery.map((icon) => <IconBox delivery={icon} key={icon.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RestaurantBanner.propTypes = {
  bgImageUrl: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSuperRestaurant: PropTypes.bool.isRequired,
  infoData: PropTypes.arrayOf(PropTypes.string).isRequired,
  delivery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RestaurantBanner.defaultProps = {};

export default RestaurantBanner;
