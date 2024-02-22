import PropTypes from 'prop-types';

import {
  Section,
  ScrollWrapper,
  ListItem,
  TripWrapper,
  TripsList,
  Title,
  TripDates,
  AddTripButton,
  AddSvg,
} from './Trips.styled';

const Trips = ({ trips, toggleModal, onClick }) => {
  return (
    <Section>
      <ScrollWrapper>
        <TripsList>
          {trips.map((trip) => (
            <ListItem key={trip.id} onClick={() => onClick(trip)}>
              <img src={trip.image} alt="City photo" />
              <TripWrapper>
                <Title>{trip.city}</Title>
                <TripDates>
                  {trip.startDate} - {trip.endDate}
                </TripDates>
              </TripWrapper>
            </ListItem>
          ))}
          <AddTripButton type="button" onClick={toggleModal}>
            Add trip
            <AddSvg />
          </AddTripButton>
        </TripsList>
      </ScrollWrapper>
    </Section>
  );
};

Trips.propTypes = {
  trips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Trips;
