import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "6ecb94ab1fd458f2c49db54c41e52e0e";

class App  extends React.Component {

state = {
  temp: undefined,
  feels_like: undefined,
  humidity: undefined,
  city: undefined,
  country: undefined,
  speed: undefined,
  pressure: undefined,
  error: undefined
}

gettingWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;

if(city) {
  const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();
  console.log(data);

   this.setState({
     temp: data.main.temp,
     feels_like: data.main.feels_like,
     humidity: data.main.humidity,
     city: data.name,
     country: data.sys.country,
     speed: data.wind.speed,
     pressure: data.main.pressure,
     error: undefined
   });
 } else {
   this.setState({
     temp: undefined,
     feels_like: undefined,
     humidity: undefined,
     city: undefined,
     country: undefined,
     speed: undefined,
     pressure: undefined,
     error: "Введите название города"
     });
 }
}

  render() {
    return (
      <div className = "wrapper">
       <div className = "main">
       <div className="container">
        <div className="row">
          <div className="col-sm-5 info">
           < Info />
          </div>
          <div className="col-sm-7 form">
           < Form WeatherMethod={this.gettingWeather}/>
           < Weather
            temp = {this.state.temp}
            feels_like = {this.state.feels_like}
            humidity = {this.state.humidity}
            city = {this.state.city}
            country = {this.state.country}
            speed = {this.state.speed}
            pressure = {this.state.pressure}
            error = {this.state.error}
           />
          </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
