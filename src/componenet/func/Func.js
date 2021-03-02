import React, { Component } from 'react';

class Child extends Component {
    render() {
        this.props.name(this)
        return (
            
            <div>
                <h1>i am a child</h1>
            </div>
        );
    }
}

class Func extends Component {
    getContext(context) {
        console.log(context)
    }
    render() {
        this.getContext(this)
        return (
            <div>
                <h1>pass function as a props</h1>
                <Child name={this.getContext}></Child>
            </div>
        );
    }
}

export default Func;