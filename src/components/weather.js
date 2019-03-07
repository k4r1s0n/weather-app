import React from "react";

class Weather extends React.Component {
  render() {
    if(this.props.city !== '') {
      return(
        <div>
          <h2>{this.props.city}, {this.props.country} </h2>
          <p><img alt="icon"src={this.props.icon}></img> {this.props.temp}°C </p>
          <p>{this.props.dscrptn}</p>
          <p>Pressure: {this.props.pressure} hpa</p>
          <p>Humidity: {this.props.humidity} %</p>
          <p>Min Temperature: {this.props.tempMin}°C</p>
          <p>Max Temperature: {this.props.tempMax}°C</p>
        </div>
      );
    } else {
      return(
        <div>
          <p>{this.props.error}</p>
        </div>
      );
    }
  }
}
export default Weather;