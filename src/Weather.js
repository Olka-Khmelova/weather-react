import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWetherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWetherData({
      ready: true,
      // coordinates: response.data.coordinates,
      temperature: Math.floor(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
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

  function search() {
    let apiKey = "co401f652fba6d208a8a8a0f33tcf3dd";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}`;
    axios.get(`${apiUrl}&key=${apiKey}&units=${units}`).then(handleResponse);
  }
  if(weatherData.ready) {
    return (
        <div className="Weather">
          <div className="main-container">
            <div className="row">
              <div className="col-6 left-side-container">
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
                      Change city
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
                <div className="row current-weather-container">
                  <div className="col-5">
                    <img
                      src=""
                      alt={weatherData.description}
                      className="weather-emoji"
                    />
                    <div className="weather-details">
                      <ul className="weather-list list">
                        <li className="weather-item">
                          <span role="img" aria-label="water drop">
                            💧
                          </span>
                          <br />
                          Humidity <br />
                          <span className="weather-item-accent">
                            {weatherData.humidity}
                          </span>{" "}
                          %
                        </li>
                        <li className="weather-item">
                          <span role="img" aria-label="wind">
                            💨
                          </span>
                          <br />
                          Wind speed <br />
                          <span className="weather-item-accent">
                            {" "}
                            {weatherData.wind}
                          </span>{" "}
                          m/h
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-7 current-weather">
                    <h1 className="current-city">{weatherData.city}</h1>
                    <div className="current-temperature">
                      <span>{weatherData.temperature}</span>
                      <span className="tempterute-unit units"> °C</span>
                    </div>
                    <p className="feels-temperature">
                      feels like 
                      <span className="feels-temperature-accent"> {weatherData.feels}
                      </span>
                      <span className="feels-unit"> °C</span>
                    </p>
                    <p className="weather-descript">{weatherData.description}</p>
                  </div>
                </div>
              </div>
              <div className=" col-6 future-weather-container">
                <ul className="current-time-list list">
                  <li className="current-time-item">today</li>
                  <li className="current-time-item"><FormatedDate date={weatherData.date}/></li>
                  <li className="current-time-item">{weatherData.time}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
}else {
  search();
  return "Loading...";
  }
}
