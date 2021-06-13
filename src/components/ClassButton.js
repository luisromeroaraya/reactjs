import React, { Component } from "react";

class ClassButton extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click() {
    this.props.click();
  }
  render() {
    return (
      <div className="App-class-button">
        <button onClick={this.click}>
          <strong>Click me</strong> (Total clicks: {this.props.currentClicks})
        </button>
      </div>
    );
  }
}

export default ClassButton;
