import PropTypes from 'prop-types';

import cloudyImg from '../../assets/images/cloudy.png';
import partlyCloudyDay from '../../assets/images/partly-cloudy-day.png';
import snow from '../../assets/images/snow.png';
import rain from '../../assets/images/rain.png';
import clearDay from '../../assets/images/clear-day.png';
import defaultImg from '../../assets/images/default.png';

const WeatherImg = ({ weather }) => {
  const getIconPath = (weather) => {
    switch (weather) {
      case 'partly-cloudy-day':
        return partlyCloudyDay;
      case 'cloudy':
        return cloudyImg;
      case 'snow':
        return snow;
      case 'rain':
        return rain;
      case 'clear-day':
        return clearDay;
      default:
        return defaultImg;
    }
  };

  return <img src={getIconPath(weather)} alt={`Weather: ${weather}`} />;
};

WeatherImg.propTypes = {
  weather: PropTypes.string,
};

export default WeatherImg;
