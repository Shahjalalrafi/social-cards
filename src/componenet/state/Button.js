import React, { Component } from 'react';
import Decrease from '../handler/Decrease';
import Increase from '../handler/Increase';
import StartTimmer from '../handler/StartTimmer';
import './style.css'

// const design = {
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadious: '5px',
//     fontSize: '20px',
//     border: 'none',
//     padding: '10px 30px',
//     margin: '10px'
// }

class Button extends Component {

    state = {
        count: 0
    }

    intervalId = null

    increamentCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decreamentCount = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }


    startTimmer = () => {
        if (this.state.count > 0) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert('finish count')
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    }

    stopTimmer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimmer = () => {
        this.setState({ count: 0 })
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render() {
        return (
            <div>
                <h1>Simple timmer</h1>
                <div>
                    <Increase addCount={this.increamentCount}></Increase>
                    {/* <button onClick= {this.increamentCount}>increase</button> */}
                    <Decrease decreaseCount={this.decreamentCount}></Decrease>
                    {/* <button onClick={this.decreamentCount}>decrease</button> */}
                    <h1>{this.state.count}</h1>
                    {/* <button onClick= {this.startTimmer}>start</button> */}
                    <StartTimmer stop={this.startTimmer}></StartTimmer>
                    <button className="button" onClick={this.stopTimmer}>stop</button>
                    <button onClick={this.resetTimmer}>reset</button>
                </div>
            </div>
        );
    }
}

export default Button;