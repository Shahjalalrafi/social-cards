import React, { Component } from 'react';

class State extends Component {

    constructor() {
        super()
        this.state = {
            count : 0
        } 
    }


    // state= {
    //     count: 0
    // }

    // handleIncrease = () => {
    //     this.setState(this.count + 1)
    // }

    
    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick= {() => {
                    this.setState({count: this.state.count + 1})
                }}> increase button</button>
            </div>
        );
    }
}

export default State;