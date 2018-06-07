import React, { Component } from "react";
import "./style.css";

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <h2>{this.props.title}</h2>
        <p>{this.props.time}</p>
      </div>
    );
  }
}

export default Event;