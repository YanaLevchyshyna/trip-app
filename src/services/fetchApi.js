import axios from 'axios';

const API_KEY = 'JACCUESG67JX468QPQJUAVATV';

axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const getForecastFromTo = async (city, date1, date2) => {
  try {
    const url = `${city}/${date1}/${date2}?unitGroup=metric&include=days`;
    const result = await axios.get(url, { params: { key: API_KEY } });
    // console.log('RESULT ---> ', result);
    // console.log('DATA result --->', result.data);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getWeatherToday = async (city) => {
  try {
    const url = `${city}/today?unitGroup=metric&include=days`;
    const result = await axios.get(url, { params: { key: API_KEY } });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getWeatherAPI = {
  getForecastFromTo,
  getWeatherToday,
};
