const axios = require('axios');
const { format } = require('date-fns');

const apiKey = '77d938015d0db14c7ecac69dc97e9934';
const city = 'Jakarta';
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeatherForecast() {
  try {
    const response = await axios.get(apiUrl);
    const forecastData = response.data.list;
    console.log('Jakarta Weather forecast:');
    
    const dailyWeather = {};

    forecastData.forEach(entry => {
      const date = new Date(entry.dt * 1000);
      const formattedDate = format(date, "EEE, dd MMM yyyy");
      const temperature = entry.main.temp;

      if (!dailyWeather[formattedDate]) {
        dailyWeather[formattedDate] = temperature;
        console.log(`${formattedDate}: ${temperature}°C`);
      }
    });
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

getWeatherForecast();
