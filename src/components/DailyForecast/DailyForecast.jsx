import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';

import WeatherImg from '../WeatherImages/WeatherImages';
import {
  ScrollWrapper,
  Title,
  List,
  Item,
  DayIcon,
  LeftButton,
  RightButton,
  FaChevronLeftsvg,
  FaChevronRightsvg,
} from './DailyForecast.styled';

const DailyForecast = ({ weatherData }) => {
  const { days } = weatherData || {};
  // const [currentDay, setCurrentDay] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const listRef = useRef(null);
  console.log('listRef', listRef);

  const checkForScrollPosition = () => {
    const { current } = listRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      console.log('scrollLeft', scrollLeft);
      console.log('scrollWidth', scrollWidth);
      console.log('clientWidth', clientWidth);

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance) =>
    listRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

  useEffect(() => {
    const { current } = listRef;
    checkForScrollPosition();
    current?.addEventListener('scroll', debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener('scroll', debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <section>
      <Title>Forecast for each day of travel</Title>
      <div
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        <ScrollWrapper>
          <List ref={listRef}>
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
          <LeftButton
            type="button"
            disabled={!canScrollLeft}
            onClick={() => scrollContainerBy(-350)}
          >
            <FaChevronLeftsvg />
          </LeftButton>
          <RightButton
            type="button"
            disabled={!canScrollRight}
            onClick={() => scrollContainerBy(350)}
          >
            <FaChevronRightsvg />
          </RightButton>
        </ScrollWrapper>
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
