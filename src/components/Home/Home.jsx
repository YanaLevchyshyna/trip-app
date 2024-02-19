import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { getWeatherAPI } from '../../services/fetchApi';
import Trips from '../Trips/Trips';

const city = 'Kyiv';
const startDate = '2024-02-20';
const endDate = '2024-02-25';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log('DATA', data);

  useEffect(() => {
    setLoading(true);

    getWeatherAPI
      .getForecastFromTo(city, startDate, endDate)
      .then((res) => {
        console.log('Погодні дані для маршруту:', res);
        if (res.length === 0) {
          throw Error;
        }
        setData(res);
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

  if (loading) {
    return (
      <>
        <h1>Trending list is loading...</h1>
      </>
    );
  }
  return (
    <div>
      <Trips />
      <ul>
        <li>{data.address}</li>
      </ul>
    </div>
  );
};

export default Home;
