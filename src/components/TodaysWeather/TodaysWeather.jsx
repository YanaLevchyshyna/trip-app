import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getWeatherAPI } from '../../services/fetchApi';
import convertMs from '../../services/convertMs';
import WeatherImg from '../WeatherImages/WeatherImages';
import {
  Wrapper,
  TempWrapper,
  Datetime,
  Datetemp,
  AddressEl,
  CountdownWrapper,
  CountdownEl,
} from './TodaysWeather.styled';

const TodaysWeather = ({ selectedTrip }) => {
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [countdownDays, setCountdownDays] = useState(null);

  const { days, address } = todaysWeather || {};

  useEffect(() => {
    const fetchTodayWeather = async () => {
      if (selectedTrip) {
        try {
          const { city, startDate } = selectedTrip;
          const response = await getWeatherAPI.getWeatherToday(city);

          if (!response) {
            throw new Error('No data received');
          }

          setTodaysWeather(response);
          calculateCountdown(startDate);

          const intervalId = setInterval(() => {
            calculateCountdown(startDate);
          }, 1000);

          return () => clearInterval(intervalId);
        } catch (error) {
          console.log("Error fetching today's weather:", error.message);
        }
      }
    };
    fetchTodayWeather();
  }, [selectedTrip]);

  const calculateCountdown = (startDate) => {
    const today = new Date();
    const tripStartDate = new Date(startDate);

    if (today > tripStartDate) {
      setCountdownDays({ days: '0', hours: '0', minutes: '0', seconds: '0' });
      return;
    }
    const timeDifference = tripStartDate - today;
    setCountdownDays(convertMs(timeDifference));
  };

  return (
    <section>
      <Wrapper>
        {todaysWeather && days && days.length > 0 && (
          <div key={todaysWeather.days[0].datetime}>
            <Datetime>
              {new Date(days[0].datetime).toLocaleDateString('en-US', {
                weekday: 'long',
              })}
            </Datetime>
            <TempWrapper>
              <WeatherImg weather={days[0].icon} />
              <Datetemp>{days[0].temp}°C</Datetemp>
            </TempWrapper>
            <AddressEl>{address}</AddressEl>
          </div>
        )}

        {countdownDays && (
          <CountdownWrapper>
            <CountdownEl>
              {countdownDays.days}
              <br />
              <span>days</span>
            </CountdownEl>
            <CountdownEl>
              {countdownDays.hours} <br />
              <span>hours</span>
            </CountdownEl>
            <CountdownEl>
              {countdownDays.minutes} <br />
              <span>minutes</span>
            </CountdownEl>
            <CountdownEl>
              {countdownDays.seconds} <br />
              <span>seconds</span>
            </CountdownEl>
          </CountdownWrapper>
        )}
      </Wrapper>
    </section>
  );
};

TodaysWeather.propTypes = {
  selectedTrip: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodaysWeather;
