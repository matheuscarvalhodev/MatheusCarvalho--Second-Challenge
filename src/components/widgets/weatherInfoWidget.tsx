import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherIcon from '../icons/weatherIcons';
import "../styles/widgets/weatherInfoWidget.css"

interface weatherProps {
  city: string;
  country:string
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

const WeatherDisplay: React.FC<weatherProps> = ({ city,country }) => {
  const [weatherData, setWeatherData] = useState<WeatherFullData | null>(null);
  const [statusUrl, setStatusUrl] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      setShowLoadingModal(true)
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
        const response = await axios.get<WeatherFullData>(url);
        if (response.status != 200){setStatusUrl(true)}
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setShowLoadingModal(false)
      }
    };

    getWeatherData();
  }, []);

  if (!weatherData) {
    return <div>
      <svg className="circleSvg-weather" viewBox="0 0 50 50">
        <circle className="circle-weather"
          cx="25"
          cy="25"
          r="20"
        />
      </svg>
    </div>;
  }

  const { temp } = weatherData.main;
  const { main: weatherMain } = weatherData.weather[0];

  return (
    <div>
      <p className='title-location'>{weatherData.name} - {country}</p>
      <div className='weather'>
        <WeatherIcon size={50} weatherName={weatherMain} />
        <p>{temp.toPrecision(2)}°</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
