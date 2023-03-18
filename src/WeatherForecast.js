import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    
    useEffect(() =>{
      setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

      function getForecast(){
        let apiKey = "co401f652fba6d208a8a8a0f33tcf3dd";
        let units = "metric";
        let latitude = props.coordinates.latitude;
        let longitude =props.coordinates.longitude;
        
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${units}`
        axios.get(apiUrl).then(handleResponse);
      }


      if(loaded) {
        return(
            <div className="row row-forecast">
            {forecastData.map(function (dailyForecast, index) {
                if (index < 5) {
                    return(
                        <div className="col" key={index}>
                        <ForecastDay data={dailyForecast} unit={props.unit}/>
                        </div>
                    )
                }else {
                  return null;
                }
            })}
        </div>
        )
      }else {
        getForecast();
      }
}
