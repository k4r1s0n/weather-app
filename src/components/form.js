import React from "react";

class Form extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <form onSubmit={this.props.weatherMethod}>
          <input type="text" name="city" placeholder="Los Angeles, US"/>
          <button id="search-btn" className="btn btn-outline-primary"><i class="fas fa-sun"></i> Search</button>
        </form>
      </div>
      
    );
  }
}
export default Form;