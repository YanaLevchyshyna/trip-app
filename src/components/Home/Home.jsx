import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import useLocalStorage from '../../hooks/useLocalStorage';
import { getWeatherAPI } from '../../services/fetchApi';
import DailyForecast from '../DailyForecast/DailyForecast';
import Modal from '../Modal/Modal';
import Filter from '../Filter/Filter';
import Trips from '../Trips/Trips';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [weatherData, setWeatherData] = useState(null);
  // const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trips, setTrips] = useLocalStorage('trips', [
    {
      id: '1',
      city: 'Barcelona',
      startDate: '2024-02-20',
      endDate: '2024-02-28',
      image: 'https://i.postimg.cc/sxzzPrfR/barcelona.avif',
    },
  ]);

  // console.log('weather DATA===>', weatherData);

  const city = 'Barcelona';
  const startDate = '2024-02-20';
  const endDate = '2024-02-25';

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const onAddTrip = (newTrip) => {
    const tripIsAdded = trips.find(
      ({ city, startDate, endDate }) =>
        city === newTrip.city ||
        startDate === newTrip.startDate ||
        endDate === newTrip.endDate
    );

    if (tripIsAdded) {
      throw new Error('Sorry this trip has already added !');
    } else {
      setTrips((trips) => [{ ...newTrip }, ...trips]);
    }
  };

  const handleSearchFieldChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilterdTrip = () =>
    trips.filter((trip) => trip.city.includes(filter));

  useEffect(() => {
    setLoading(true);
    // const { city, startDate, endDate } = selectedTrip;
    // console.log('city ===>', city);
    getWeatherAPI
      .getForecastFromTo(city, startDate, endDate)
      .then((response) => {
        console.log('response', response);

        if (!response) {
          throw new Error('No data received');
        }
        setWeatherData(response);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // const handleTripSelection = (trip) => {
  //   console.log('TRIP==>', trip);
  //   setSelectedTrip(trip);
  // };

  if (error) {
    return <h1>ERROR ....!!!!</h1>;
  }

  if (loading || !weatherData) {
    return (
      <>
        <h1>Traveling list is loading...</h1>
      </>
    );
  }

  return (
    <>
      <main>
        <Filter value={filter} onChange={handleSearchFieldChange} />
        {showModal && <Modal onClick={toggleModal} onSubmit={onAddTrip} />}
        <Trips trips={getFilterdTrip()} toggleModal={toggleModal} />
        <DailyForecast weatherData={weatherData} />
        {/* {selectedTrip && <DailyForecast weatherData={weatherData} />} */}
      </main>
    </>
  );
};

export default Home;
