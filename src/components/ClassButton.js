import React, { Component } from "react";

class ClassButton extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      foo: 0,
    };
  }
  click() {
    this.setState({
      foo: this.state.foo + 1,
    });
  }
  render() {
    return (
      <div className="App-class-button">
        <button onClick={this.click}>
          <strong>Click me</strong> (Total clicks: {this.state.foo})
        </button>
      </div>
    );
  }
}

export default ClassButton;
