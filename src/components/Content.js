import React from 'react';
import { useSelector } from 'react-redux';

function Content({wt}) {

    let day = wt.dt_txt.slice(0,10);
    let descp= wt.weather[0].description;
    let tempMax= wt.main.temp_max;
    let tempMin= wt.main.temp_min;
    let icon = wt.weather[0].icon;
    
    const items = useSelector((state) => state.weather.items);
    const cityName = items.city.name;
    const country = items.city.country;
    

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date(day);
    let dayName = days[d.getDay()];
    

  return (  
      <div className="container">
        <ul className="cities"></ul>
            <li className="city">
                <h1 className='day'>{dayName}</h1>
                <h2 className="city-name" data-name={`${cityName},${country}`}>
                    <span>{cityName}</span>{" "}
                    <sup>{country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.floor(tempMax)}
                    <sup>°C</sup>
                    {" "}/{" "}{Math.floor(tempMin)}
                    <sup>°C</sup>
                </div>
                <figure>
                    <img className="city-icon" src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`} alt={`${descp}`}/>
                    <figcaption>{descp}</figcaption>
                </figure>
                </li>
      </div>
  )
}

export default Content
