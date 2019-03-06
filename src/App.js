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
      error: '',
    }
    this.getWeather = this.getWeather.bind(this);
  }
  
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await apiUrl.json();
    if (city) {
      console.log(data);
      this.setState ({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        error: '',
      })
    }
    
  }
  render() {
    return(
      <div>
        <Info/>
        <Form weatherMethod={this.getWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
        />
      </div>
    );
  }
}
export default App;