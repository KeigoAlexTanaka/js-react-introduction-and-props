import React, { Component } from "react";
import Event from "../Event";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Eric's Cool Event List</h2>
        <Event title="Spongebob Squarepants on Broadway" time="7pm Friday" />
        <Event title="My Best Friend's Wedding" time="6pm Saturday" />
        <Event title="Basketball Practice" time="12pm Sunday" />
      </div>
    );
  }
}

export default App;