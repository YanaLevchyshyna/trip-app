import { useState, useEffect } from 'react';

import { getWeatherAPI } from '../../services/fetchApi';
import Trips from '../Trips/Trips';
import DailyForecast from '../DailyForecast/DailyForecast';

const city = 'Kyiv';
const startDate = '2024-02-20';
const endDate = '2024-02-25';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log('DATA', weatherData);

  useEffect(() => {
    setLoading(true);

    getWeatherAPI
      .getForecastFromTo(city, startDate, endDate)
      .then((response) => {
        // console.log('response', response);

        if (!response) {
          throw new Error('No data received');
        }
        setWeatherData(response);
        return;
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    <h1>ERROR ....!!!!</h1>;
  }

  if (loading || !weatherData) {
    return (
      <>
        <h1>Trending list is loading...</h1>
      </>
    );
  }
  return (
    <div>
      <main>
        <Trips />
        <DailyForecast weatherData={weatherData} />
      </main>
    </div>
  );
};

export default Home;
