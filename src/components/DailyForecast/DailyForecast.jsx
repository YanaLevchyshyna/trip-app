import PropTypes from 'prop-types';

import WeatherImg from '../WeatherImages/WeatherImages';
import { Title, List, Item } from './DailyForecast.styled';

const DailyForecast = ({ weatherData }) => {
  //   console.log('weatherData', weatherData);

  const { days } = weatherData || {};
  console.log('DAYS ===> ', days);

  return (
    <section>
      <div>
        <Title>Forecast for each day of travel</Title>
        <List>
          {days.map((day) => (
            <Item key={day.datetime}>
              <p>
                {new Date(day.datetime).toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </p>
              <WeatherImg weather={day.icon} />
              <p>{day.icon}</p>
              <p>
                {day.tempmin}°C/{day.tempmax}°C
              </p>
            </Item>
          ))}
        </List>
      </div>
    </section>
  );
};

export default DailyForecast;

DailyForecast.propTypes = {
  weatherData: PropTypes.shape({
    days: PropTypes.arrayOf(
      PropTypes.shape({
        datetime: PropTypes.string,
        icon: PropTypes.string,
        tempmin: PropTypes.number,
        tempmax: PropTypes.number,
      })
    ),
  }),
};
