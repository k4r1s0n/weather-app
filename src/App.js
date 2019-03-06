import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "b31e00def348fa90ff280124c0e4d3b8";

class App extends React.Component {
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await apiUrl.json();
    console.log(data);
  }
  render() {
    return(
      <div>
        <Info/>
        <Form weatherMethod={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}
export default App;