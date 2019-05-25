import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b31e00def348fa90ff280124c0e4d3b8";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temp: '',
      city: '',
      country: '',
      pressure: '',
      humidity: '',
      tempMin: '',
      tempMax: '',
      dscrptn: '',
      icon: '',
      error: '',
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async (event) => {
    let latitude;
    let longitude;
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });   
    }
    event.preventDefault();
    const city = event.target.elements.city.value;
    console.log(city);
    const apiUrlCity = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const apiUrlCoord = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const currentData = await apiUrlCoord.json();
    console.log(currentData);
    console.log(currentData.main.temp);
    const userData = await apiUrlCity.json();
    const icon = (data) =>`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const roundTemp = (temp) => Math.round(temp);
    const roundMinTemp = (temp) => Math.round(temp);
    const roundMaxTemp = (temp) => Math.round(temp);
    if (city === '') {
      this.setState ({
        temp: roundTemp(currentData.main.temp),
        city: currentData.name,
        country: currentData.sys.country,
        pressure: currentData.main.pressure,
        humidity: currentData.main.humidity,
        tempMin: roundMinTemp(currentData.main.temp_min),
        tempMax: roundMaxTemp(currentData.main.temp_max),
        dscrptn: currentData.weather[0].description,
        icon: icon(currentData),
        error: '',
      })
    } else if (userData.message === 'city not found') {
        const errorMes = 'Enter your city correctly';
        this.setState ({
          temp: '',
          city: '',
          country: '',
          pressure: '',
          humidity: '',
          tempMin: '',
          tempMax: '',
          dscrptn: '',
          icon: '',
          error: errorMes,
        })
    } else {
      this.setState ({
        temp: roundTemp(userData.main.temp),
        city: userData.name,
        country: userData.sys.country,
        pressure: userData.main.pressure,
        humidity: userData.main.humidity,
        tempMin: roundMinTemp(userData.main.temp_min),
        tempMax: roundMaxTemp(userData.main.temp_max),
        dscrptn: userData.weather[0].description,
        icon: icon(userData),
        error: '',
      })
    }
  }
  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.getWeather}/>
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
        </div>
      </div>
    );
  }
}
export default App;