import { useEffect, useState } from 'react';

import axios from 'axios';

import { FullScreenLoader, SearchBar, CardWeather, ErrorMessage } from './components';

const API_KEY = '1fa3b3e023ae3dcbf7ac3c4bcccbf2a8';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [location, setLocation] = useState('Morelia');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  console.log(navigator.geolocation);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue !== '') {
      setLocation(inputValue);
    }

    const input = document.querySelector('input');

    if (input.value === '') {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    input.value = '';

    e.preventDefault();
  };

  useEffect(() => {
    setLoading(true);
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${ location }&units=metric&appid=${ API_KEY }&lang=es`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${ location }&appid=${ API_KEY }&lang=es`;

    axios.get(weather).then(response => {
      setTimeout(() => {
        setCurrentWeather(response.data);
      }, 1500);
    }).catch((error) => {
      setLoading(false);
      setErrorMessage(error);
    });

    axios.get(forecast).then(response => {
      setTimeout(() => {
        setHourlyForecast(response.data);
        setLoading(false);
      }, 1500);
    }).catch((error) => {
      setLoading(false);
      setErrorMessage(error);
    });

    console.log(hourlyForecast);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  if (!currentWeather) return <FullScreenLoader/>;

  return (
    <div
      className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      {
        errorMessage && <ErrorMessage errorMessage={ errorMessage }/>
      }
      { /* Form */ }
      <SearchBar handleInput={ handleInput } handleSubmit={ handleSubmit } animate={ animate }/>
      { /* Card */ }
      <CardWeather data={ currentWeather } loading={ loading }/>
    </div>
  );
};

export default App;
