import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');
    function convertToFarenh(event) {
        event.preventDefault();
        setUnit('fahrenheit');
        props.updateUnit("fahrenheit");

    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
        props.updateUnit("celsius");
    }
    if(unit === 'celsius') {
        return(
            <>
                <div className="current-temperature">
                    <span>{props.celsius}</span>
                    <span className="tempterute-unit units"> °C | <a href="/" onClick={convertToFarenh}>°F</a></span>
                </div>
                <p className="feels-temperature">
                    feels like 
                    <span className="feels-temperature-accent"> {props.feels}
                    </span>
                    <span className="feels-unit"> °C </span>
                </p>
                <p className="weather-descript">{props.description}</p>
        </>
        );
    } else {
        let fahrenheit = Math.floor((props.celsius * 9) / 5 + 32);
        let feelsFarenh = Math.floor((props.feels * 9) / 5 + 32);

        return(
            <>
                <div className="current-temperature">
                    <span>{fahrenheit}</span>
                    <span className="tempterute-unit units"> <a href="/" onClick={convertToCelsius}>°C </a>| °F</span>
                </div>
                <p className="feels-temperature">
                    feels like 
                    <span className="feels-temperature-accent"> {feelsFarenh}
                    </span>
                    <span className="feels-unit"> °F </span>
                </p>
                <p className="weather-descript">{props.description}</p>
        </>
        );
    }
   
}