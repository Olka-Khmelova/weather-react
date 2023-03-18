import React from "react";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature updateUnit={props.updateUnit} celsius={props.data.temperature} feels={props.data.feels} description={props.data.description}/>
      </div>
      </div>
    );
}