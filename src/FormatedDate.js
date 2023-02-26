import React from "react";

export default function formatedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[props.date.getDay()];
      let hours = padTo2Digits(props.date.getHours());
      let minutes = padTo2Digits(props.date.getMinutes());

    function padTo2Digits(num){
        return String(num).padStart(2, "0");
      }
    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    )
}