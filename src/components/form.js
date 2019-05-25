import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Los Angeles, US"/>
        <button id="search-btn">Search</button>
      </form>
    );
  }
}
export default Form;