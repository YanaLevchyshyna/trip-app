import { useState } from 'react';
import { nanoid } from 'nanoid';

import barcelonaImg from '../../assets/images/barcelona.jpeg';

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
    <div>
      <h1>My trips</h1>
      <ul>
        {trips.map((trip) => (
          <li
            key={trip.id}
            style={{
              borderRadius: '0px 0px 4px 4px',
              width: '264px',
              textAlign: 'center',
            }}
          >
            <img
              src={barcelonaImg}
              alt="Photo of Barcelona city"
              width="260"
              height="260"
            />
            <div
              style={{
                padding: '32px 16px',
                border: '1px solid #e7e9fc',
                boxShadow: '0px 1px 6px rgba(46, 47, 66, 0.08)',
              }}
            >
              <h2
                style={{
                  marginBottom: '8px',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: 1.2,
                  color: '#e7e9f',
                }}
              >
                {trip.city}
              </h2>
              <p
                style={{
                  color: '#8e8f99',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1.5,
                }}
              >
                {trip.startDate} - {trip.endDate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;
