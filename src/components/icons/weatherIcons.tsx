import { WiCloud, WiDayCloudy, WiDayFog, WiDayRainMix, WiDaySunny, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

interface WeatherIconProps {
  weatherName: string;
  size:number;
}

const WeatherIcon = ({ weatherName, size }: WeatherIconProps): JSX.Element => {
  switch (weatherName) {
    case 'Thunderstorm':
      return <WiThunderstorm size={size} />;
    case 'Drizzle':
        return<WiDayRainMix size={size}/>
    case 'Rain':
      return <WiRain size={size}/>;
    case 'Snow':
      return <WiSnow size={size}/>;
    case 'Fog':
        return <WiDayFog size={size}/>;
    case 'Clear':
      return <WiDaySunny size={size}/>;
    case 'Clouds':
      return <WiCloud size={size}/>;
    case 'Few Clouds':
      return <WiDayCloudy size={size}/>;
    case 'Broken Clouds':
      return <WiDayCloudy size={size}/>;
    default:
      return <WiDaySunny size={size}/>;
  }
};

export default WeatherIcon;
