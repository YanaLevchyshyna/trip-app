import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import WeatherImg from '../WeatherImages/WeatherImages';
import {
  ScrollWrapper,
  Title,
  List,
  Item,
  DayIcon,
  FaChevronRightsvg,
  FaChevronLeftsvg,
} from './DailyForecast.styled';

const DailyForecast = ({ weatherData }) => {
  const { days } = weatherData || {};
  const [currentDay, setCurrentDay] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const listRef = useRef(null);
  console.log('listRef', listRef);

  const checkForScrollPosition = () => {
    const { current } = listRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    setCurrentDay((prevDay) => Math.max(prevDay - 1, 0));
  };

  const scrollRight = () => {
    setCurrentDay((prevDay) => Math.min(prevDay + 1, days.length - 1));
  };

  return (
    <section>
      <Title>Forecast for each day of travel</Title>
      <div
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        <FaChevronLeftsvg onClick={scrollLeft} />
        <ScrollWrapper scrollPosition={currentDay}>
          <List>
            {days.map((day, index) => (
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
        <FaChevronRightsvg onClick={scrollRight} />
      </div>
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
