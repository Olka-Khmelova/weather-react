import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 4,
    feels: 2,
    date: "Saturday",
    time: "10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 60,
    wind: 8
  };

  return (
    <div className="Weather">
      <div className="main-container">
        <div className="row">
          <div className="col-6 left-side-container">
            <form className="row g-3 city-form">
              <div className="col-auto">
                <input
                  type="search"
                  className="form-control-sm"
                  placeholder="Enter your city"
                  autoFocus="on"
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
                  src={weatherData.imgUrl}
                  alt="weather emoji"
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
              <li className="current-time-item">{weatherData.date}</li>
              <li className="current-time-item">{weatherData.time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
