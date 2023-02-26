import React from "react";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return temperature;
        
      }
    
      function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return temperature;
      }
    
      function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
      }
    return(
        <>
            <span  className="weather-forecst-day">{day()}</span> 
            <img src={props.data.condition.icon_url} alt={props.data.condition.icon} width="50"/>
            <span  className="maximum-temp forecast-temper">{maxTemperature()}°</span>{" "}
            <span  className="min-temp forecast-temper">{minTemperature()}°</span>
        </>
    )
}