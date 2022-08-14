import React from 'react';
import hotBg from '../assets/hot.jpeg';
import coldBg from '../assets/cold.jpeg';
import Descriptions from './Descriptions';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from '../weatherService';
import { useLocation } from "react-router-dom";

function CityWeather(props) {
  const location = useLocation();
  const [city] = useState(location.state.city);
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      //dynamic bg
      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) setBg (coldBg);
      else setBg(hotBg);
     };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
  };

  return (
   <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
            <div className="section section__inputs">
             <button onClick={(e) => handleUnitsClick (e)}>°F</button>
             </div>
  
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name},${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F' 
              }`}</h1>
              </div>
            </div>
  
           {/* bottom description */}
           <Descriptions weather={weather} units={units} />
           </div> 
          )
        }
          
      </div>
    </div>
    );
}
export default CityWeather;