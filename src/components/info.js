import React from "react";

class Info extends React.Component {
  render() {
    return(
      <div className="text-center">
        <h1>Weather Application</h1>
        <div className="btn-group info-button">
          <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Weather in current location
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <p>Press Search without entering city and country</p>
          </div>
        </div>

        <div className="btn-group info-button">
          <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Weather in another location
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <p>Please enter your city and country and press Search</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;