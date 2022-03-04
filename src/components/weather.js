import React from "react";

const Weather = (props) => (
    <div className = "infoWeath">
    {props.city &&
     <div>
     <p>Местоположение: {props.city}, {props.country} </p>
     <p>Температура: {props.temp}</p>
     <p>Чувствуется как: {props.feels_like}</p>
     <p>Влажность: {props.humidity}%</p>
     <p>Скорость ветра: {props.speed} m/s</p>
     <p>Давление: {props.pressure} hpa</p>
     </div>
    }
    <p  className = "error">{props.error}</p>
    </div>
  )


export default Weather;
