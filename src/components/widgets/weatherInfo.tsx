import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

const WeatherDisplay = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const response = await axios.get<WeatherData>(url);
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

  const { name, main, weather } = weatherData;
  const { temp } = main;
  const { main: weatherMain, description: weatherDescription } = weather[0];

  return (
    <div>
      <p>{temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;
