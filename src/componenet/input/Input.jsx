import React, { Component } from 'react';

class Input extends Component {

    handleChange = (event) => {
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type='text' placeholder='enter your name'></input>
            </div>
        );
    }
}

export default Input;