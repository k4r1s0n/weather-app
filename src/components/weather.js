import React from "react";

const style= {color: "#66ffff"};
class Weather extends React.Component {
  render() {
    if(this.props.city !== '') {
      return(
        <div>
          <h2><span style={style}>{this.props.city}, {this.props.country}</span></h2>
          <p><img alt="icon"src={this.props.icon}></img> <span style={style}>{this.props.temp}°C</span></p>
          <p><span style={style}>{this.props.dscrptn}</span></p>
          <p>Pressure: <span style={style}>{this.props.pressure} hpa</span></p>
          <p>Humidity: <span style={style}>{this.props.humidity} %</span></p>
          <p>Min Temperature: <span style={style}>{this.props.tempMin}°C</span></p>
          <p>Max Temperature: <span style={style}>{this.props.tempMax}°C</span></p>
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