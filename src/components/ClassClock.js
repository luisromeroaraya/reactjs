import React, { Component } from "react";

class ClassClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <p className="App-class-clock">
        The time is {this.state.time} (Class Component)
      </p>
    );
  }
}

export default ClassClock;
