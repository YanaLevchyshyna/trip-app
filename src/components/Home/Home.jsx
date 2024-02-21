import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import barcelonaImg from '../../assets/images/barcelona.jpeg';
import { getWeatherAPI } from '../../services/fetchApi';
import DailyForecast from '../DailyForecast/DailyForecast';
import Modal from '../Modal/Modal';
import {
  Section,
  ListItem,
  TripWrapper,
  TripsList,
  Title,
  TripDates,
  AddTripButton,
  AddSvg,
} from './Home.styled';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  // const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trips, setTrips] = useState([
    {
      id: 'id' + nanoid(),
      city: 'Barcelona',
      startDate: '2024-02-20',
      endDate: '2024-02-10',
    },
  ]);

  console.log('weather DATA===>', weatherData);

  const city = 'Barcelona';
  const startDate = '2024-02-20';
  const endDate = '2024-02-25';

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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
        <Section>
          <TripsList>
            {trips.map((trip) => (
              <ListItem key={trip.id}>
                <img src={barcelonaImg} alt="Photo of Barcelona city" />
                <TripWrapper>
                  <Title>{trip.city}</Title>
                  <TripDates>
                    {trip.startDate} - {trip.endDate}
                  </TripDates>
                </TripWrapper>
              </ListItem>
            ))}
            {showModal && <Modal onClick={toggleModal} />}
            <AddTripButton type="button" onClick={toggleModal}>
              Add trip
              <AddSvg />
            </AddTripButton>
          </TripsList>
        </Section>
        <DailyForecast weatherData={weatherData} />
        {/* {selectedTrip && <DailyForecast weatherData={weatherData} />} */}
      </main>
    </>
  );
};

export default Home;
