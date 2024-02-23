import PropTypes from 'prop-types';

import WeatherImg from '../WeatherImages/WeatherImages';
import {
  ScrollWrapper,
  Title,
  List,
  Item,
  DayIcon,
} from './DailyForecast.styled';

const DailyForecast = ({ weatherData }) => {
  // console.log('weatherData', weatherData);

  const { days } = weatherData || {};
  // console.log('DAYS ===> ', days);

  return (
    <section>
      <Title>Forecast for each day of travel</Title>
      <ScrollWrapper>
        <List>
          {days.map((day) => (
            <Item key={day.datetime}>
              <p>
                {new Date(day.datetime).toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </p>
              <WeatherImg weather={day.icon} />
              <DayIcon>{day.icon}</DayIcon>
              <p>
                {day.tempmin}°C/{day.tempmax}°C
              </p>
            </Item>
          ))}
        </List>
      </ScrollWrapper>
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
