import React, { Component } from 'react';
import ClassButton from './ClassButton'

class ClassButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            color: 'white',
            clicks: 0
        };
    }
    click() {
        this.setState((prevState, props) => ({
            color: prevState.color === 'white' ? 'red' : 'white',
            clicks: this.state.clicks + 1,
        }));
    }
    render() {
        return (
            <div className="App-class-button-container" style={{height: '50px', width: '200px', backgroundColor: this.state.color}}>
                <ClassButton click={this.click} currentClicks={this.state.clicks}/>
            </div>
        )
    }
}

export default ClassButtonContainer;