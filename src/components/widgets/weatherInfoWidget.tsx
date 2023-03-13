import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherIcon from '../icons/weatherIcons';
import "../styles/widgets/weatherInfoWidget.css"

interface weatherProps{
  user:string
}

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

const WeatherDisplay: React.FC<weatherProps> = ({user}) => {
  const [weatherData, setWeatherData] = useState<WeatherFullData | null>(null);

  const userData = localStorage.getItem(`user ${user}`);
  const city = userData ? JSON.parse(userData) : null;

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&appid=${apiKey}`;
        const response = await axios.get<WeatherFullData>(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getWeatherData();
  }, []);


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
