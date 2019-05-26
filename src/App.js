import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Beach from "./video/beach.mp4";

const API_KEY = "b31e00def348fa90ff280124c0e4d3b8";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: "",
      city: "",
      country: "",
      pressure: "",
      humidity: "",
      tempMin: "",
      tempMax: "",
      dscrptn: "",
      icon: "",
      error: ""
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async event => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });
    }
    event.preventDefault();
    const city = event.target.elements.city.value;
    console.log(city);
    const apiUrlCity = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const apiUrlCoord = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const currentData = await apiUrlCoord.json();
    const userData = await apiUrlCity.json();
    console.log(currentData);
    console.log(userData);
    const icon = data =>
      `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const roundTemp = temp => Math.round(temp);
    const roundMinTemp = temp => Math.round(temp);
    const roundMaxTemp = temp => Math.round(temp);
    const capitalizeFirstLetter = string => {
      return string
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(" ");
    };
    const errorMessage = code => {
      if (code === "404") {
        return "Enter your city correctly";
      } else if (code === "400") {
        return "Geolocation is not supported";
      }
    };
    if (city === "" && currentData.cod !== "400") {
      this.setState({
        temp: roundTemp(currentData.main.temp),
        city: currentData.name,
        country: currentData.sys.country,
        pressure: currentData.main.pressure,
        humidity: currentData.main.humidity,
        tempMin: roundMinTemp(currentData.main.temp_min),
        tempMax: roundMaxTemp(currentData.main.temp_max),
        dscrptn: capitalizeFirstLetter(currentData.weather[0].description),
        icon: icon(currentData),
        error: ""
      });
    } else if (userData.cod === "404") {
      this.setState({
        temp: "",
        city: "",
        country: "",
        pressure: "",
        humidity: "",
        tempMin: "",
        tempMax: "",
        dscrptn: "",
        icon: "",
        error: errorMessage(userData.cod)
      });
    } else if (currentData.cod === "400" && userData.cod === "400") {
      this.setState({
        temp: "",
        city: "",
        country: "",
        pressure: "",
        humidity: "",
        tempMin: "",
        tempMax: "",
        dscrptn: "",
        icon: "",
        error: errorMessage(currentData.cod)
      });
    } else {
      this.setState({
        temp: roundTemp(userData.main.temp),
        city: userData.name,
        country: userData.sys.country,
        pressure: userData.main.pressure,
        humidity: userData.main.humidity,
        tempMin: roundMinTemp(userData.main.temp_min),
        tempMax: roundMaxTemp(userData.main.temp_max),
        dscrptn: capitalizeFirstLetter(userData.weather[0].description),
        icon: icon(userData),
        error: ""
      });
    }
  };
  render() {
    return (
      <div id="app" className="container">
        <div className="vid-container">
          <video loop autoPlay>
            <source src={Beach} type="video/mp4" />
          </video>
        </div>
        <div id="wrap" className="row">
          <div id="info" className="col-md-6">
            <Info />
          </div>
          <div id="form" className="col-md-6">
            <Form weatherMethod={this.getWeather} />
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              tempMin={this.state.tempMin}
              tempMax={this.state.tempMax}
              dscrptn={this.state.dscrptn}
              icon={this.state.icon}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
