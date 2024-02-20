import PropTypes from 'prop-types';

const DailyForecast = ({ weatherData }) => {
  //   console.log('weatherData', weatherData);

  const { days } = weatherData;
  console.log('DAYS ===> ', days);

  return (
    <section>
      <div>
        <h2>Forecast for each day of travel</h2>
        <ul>
          {days.map((day) => (
            <li key={day.datetime}>
              <p>
                {new Date(day.datetime).toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </p>
              <p>{day.icon}</p>
              <p>
                {day.tempmin}°C/{day.tempmax}°C
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DailyForecast;

// DailyForecast.propTypes = {
//   weatherData: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       vote_average: PropTypes.number,
//       original_title: PropTypes.string,
//       poster_path: PropTypes.string,
//     }).isRequired
//   ),
// };
