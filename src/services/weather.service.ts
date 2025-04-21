import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY2;
if (!API_KEY) {
  console.error('❌ OpenWeather API key is missing'); // 🆕 Warn if API key is missing
  process.exit(1); // Exit the application if API key is missing
}
console.log(process.env);  // Log all environment variables to check if OPENWEATHER_API_KEY exists

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city: string) => {
  if (!API_KEY) {
    console.error('❌ OpenWeather API key is missing'); // 🆕 Warn if API key is not set
    return null;
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data; // ✅ Returns full weather object from API
  } catch (error) {
    console.error('❌ Weather API error:', error); // ✅ Logs API error
    return null;
  }
};
