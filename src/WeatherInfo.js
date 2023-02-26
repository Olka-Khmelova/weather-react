import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="row current-weather-container">
        <div className="col-5">
          <img
            src={props.data.icon}
            alt={props.data.description}
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
                  {props.data.humidity}
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
                  {props.data.wind}
                </span>{" "}
                m/h
              </li>
            </ul>
          </div>
        </div>
        <div className="col-7 current-weather">
          <h1 className="current-city">{props.data.city}</h1>
          <div className="current-temperature">
            <span>{props.data.temperature}</span>
            <span className="tempterute-unit units"> °C</span>
          </div>
          <p className="feels-temperature">
            feels like 
            <span className="feels-temperature-accent"> {props.data.feels}
            </span>
            <span className="feels-unit"> °C</span>
          </p>
          <p className="weather-descript">{props.data.description}</p>
        </div>
      </div>
    );
}