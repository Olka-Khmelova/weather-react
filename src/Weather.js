import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWetherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  const updateUnit = (unit) => {
    console.log("wow")
    setUnit(unit);
  };   

  function handleResponse(response) {
    setWetherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.floor(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: Math.floor(response.data.wind.speed),
      city: response.data.city,
      feels: Math.floor(response.data.temperature.feels_like),
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getPosition(position) {
    let latitude = position.coords.latitude ;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "co401f652fba6d208a8a8a0f33tcf3dd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(handleResponse);
    console.log(`${apiUrl}`)
  }
  
  function currentCity() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function search() {
    let apiKey = "co401f652fba6d208a8a8a0f33tcf3dd";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}`;
    axios.get(`${apiUrl}&key=${apiKey}&units=${units}`).then(handleResponse);
    console.log(`${apiUrl}&key=${apiKey}&units=${units}`)
  }
  if(weatherData.ready) {
    return (
        <div className="Weather">
          <div className="main-container">
            <div className="row">
              <div className="col-5 left-side-container">
                <form className="row g-3 city-form" onSubmit={handleSubmit}>
                  <div className="col-auto">
                    <input
                      type="search"
                      className="form-control-sm"
                      placeholder="Enter your city"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3 btn-sm change-city-button"
                    >
                      Search
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-secondary mb-3 btn-sm geo-location-button"
                    >
                      <span role="img" aria-label="pin location">
                        📍
                      </span>
                      Current
                    </button>
                  </div>
                </form>
                <WeatherInfo data={weatherData} onclick={updateUnit} updateUnit={updateUnit}/>
              </div>
              <div className=" col-6 future-weather-container">
              <FormatedDate date={weatherData.date}/>
                <div className="weather-forecast" >
                <WeatherForecast coordinates={weatherData.coordinates} unit={unit}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
}else {
  currentCity()
  return "Loading...";
  }
}
