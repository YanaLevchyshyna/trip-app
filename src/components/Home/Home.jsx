import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

import useLocalStorage from '../../hooks/useLocalStorage';
import { getWeatherAPI } from '../../services/fetchApi';
import DailyForecast from '../DailyForecast/DailyForecast';
import Modal from '../Modal/Modal';
import Filter from '../Filter/Filter';
import Trips from '../Trips/Trips';
import TodaysWeather from '../TodaysWeather/TodaysWeather';
import Loader from '../Loader/Loader';
import { Container } from './Home.styled';

const Home = () => {
  const [trips, setTrips] = useLocalStorage('trips', [
    {
      id: '1',
      city: 'Barcelona',
      startDate: '2024-02-20',
      endDate: '2024-02-28',
      image: 'https://i.postimg.cc/sxzzPrfR/barcelona.avif',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [weatherData, setWeatherData] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tripClicked, setTripClicked] = useState(false);

  console.log('selectedTrip ===>', selectedTrip);

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

  const getFilteredTrip = () => {
    const normalizedToLowerCase = filter.toLowerCase();

    const filteredTrips = trips.filter((trip) => {
      return trip.city.toLowerCase().trim().includes(normalizedToLowerCase);
    });
    return filteredTrips;
  };

  const onTripSelect = (trip) => {
    setSelectedTrip(trip);
    setTripClicked(true);
  };

  useEffect(() => {
    if (selectedTrip === null && trips.length > 0) {
      setSelectedTrip(trips[0]);
    }
  }, [selectedTrip, trips]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTrip) {
          setLoading(true);

          const { city, startDate, endDate } = selectedTrip;
          const response = await getWeatherAPI.getForecastFromTo(
            city,
            startDate,
            endDate
          );

          if (!response) {
            throw new Error('No data received');
          }

          setWeatherData(response);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTrip]);

  if (error) {
    return <h1>ERROR ....!!!!</h1>;
  }

  if (loading || !weatherData) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <main
          style={{
            display: 'flex',
            gap: 24 + 'px',
          }}
        >
          <div>
            <Filter value={filter} onChange={handleSearchFieldChange} />
            {showModal && <Modal onClick={toggleModal} onSubmit={onAddTrip} />}
            <Trips
              trips={getFilteredTrip()}
              toggleModal={toggleModal}
              onClick={onTripSelect}
            />
            {selectedTrip && tripClicked && !loading && weatherData && (
              <DailyForecast weatherData={weatherData} />
            )}
          </div>
          <div>
            {selectedTrip && tripClicked && !loading && weatherData && (
              <TodaysWeather selectedTrip={selectedTrip} />
            )}
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
