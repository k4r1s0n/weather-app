import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Forecast from "./components/forecast";

class App extends React.Component {
  render() {
    return(
      <div>
        <Info/>
        <Form/>
        <Forecast/>
      </div>
    );
  }
}
export default App;