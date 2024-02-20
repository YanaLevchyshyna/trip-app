import { useState } from 'react';
import { nanoid } from 'nanoid';

import barcelonaImg from '../../assets/images/barcelona.jpeg';
import {
  Section,
  ListItem,
  TripWrapper,
  TripsList,
  Title,
  TripDates,
} from './Trips.styled';

const Trips = () => {
  const [trips, setTrips] = useState([
    {
      id: 'id' + nanoid(),
      city: 'Barcelona',
      startDate: '2023.06.25',
      endDate: '2023.07.10',
    },
  ]);

  return (
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
      </TripsList>
    </Section>
  );
};

export default Trips;
