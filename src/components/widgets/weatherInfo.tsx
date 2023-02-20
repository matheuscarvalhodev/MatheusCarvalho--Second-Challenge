import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherIcon from '../icons/weatherIcons';
import "../styles/weather.css"

interface WeatherFullData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  sys: {
    country: string;
    name: string;
  };
}

const WeatherDisplay = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherFullData | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const response = await axios.get<WeatherFullData>(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getWeatherData();
  }, []);

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather, sys } = weatherData;
  const { temp } = main;
  const { main: weatherMain, description: weatherDescription } = weather[0];

  return (
    <div>
      <p className='title-location'>{name} - Brazil</p>
      <div className='weather'>
        <WeatherIcon size={50} weatherName={weatherMain} />
        <p>{temp.toPrecision(2)}°</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
