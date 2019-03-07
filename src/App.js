import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

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
    event.preventDefault();
    const city = event.target.elements.city.value;
    console.log(city);
  
    if (city === '') {
      const errorMes = 'Enter your city please';
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
      const apiUrl = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await apiUrl.json();
      const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const tempRound = (temp) => Math.round(temp);
      const roundTemp = tempRound(data.main.temp);
      const roundMinTemp = tempRound(data.main.temp_min);
      const roundMaxTemp = tempRound(data.main.temp_max);
      console.log(data);
      this.setState ({
        temp: roundTemp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        tempMin: roundMinTemp,
        tempMax: roundMaxTemp,
        dscrptn: data.weather[0].description,
        icon: icon,
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