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
  const { days } = weatherData || {};

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

export default DailyForecast;
