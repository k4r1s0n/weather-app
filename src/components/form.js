import React from "react";

class Form extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <h5>Enter your city and country</h5>
        <form onSubmit={this.props.weatherMethod}>
          <input type="text" name="city" placeholder="Los Angeles, US"/>
          <button id="search-btn" className="btn btn-success"><i class="fas fa-sun"></i> Search</button>
        </form>
      </div>
      
    );
  }
}
export default Form;