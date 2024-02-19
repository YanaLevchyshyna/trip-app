import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getWeatherAPI } from '../../services/fetchApi';
import Trips from '../Trips/Trips';
import DailyForecast from '../DailyForecast/DailyForecast';

const city = 'Kyiv';
const startDate = '2024-02-20';
const endDate = '2024-02-25';

const Home = () => {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log('DATA', days);

  useEffect(() => {
    setLoading(true);

    const fetchDays = async () => {
      try {
        const { days } = await getWeatherAPI.getForecastFromTo(
          city,
          startDate,
          endDate
        );
        if (days.length === 0) {
          toast.error('Sorry, something went wrong... Please try again!', {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }
        setDays(days);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDays();
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
      <main>
        <Trips />
        <DailyForecast />
      </main>
    </div>
  );
};

export default Home;
