import React from 'react'
import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import Error from './Error';

function Header() {
    const [city, setCity] = useState("");
    
    const dispatch = useDispatch();
    
    const status = useSelector((state) => state.weather.status);
    const error = useSelector((state) => state.weather.error);

     
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchWeather(city));
        setCity("");       
    }
    if(status === 'failed'){
        return <Error message={error}/>
      }
    
  return (
    <>
        <section className="top-banner">
            <div className="container">
            <h1 className="heading">Simple Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a city" onChange={(e) => setCity(e.target.value)} />
                <button type="submit">SUBMIT</button>
                <span className="msg"></span>
            </form>
            </div>
        </section>
    </>
  )
}

export default Header
