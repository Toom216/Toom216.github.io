import React, { Component } from "react";

export default class ComponentOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    }
    decrement() {
        this.setState((state) => ({
            count: state.count - 1,
        }));
    }

    reset() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div>
                <button className="_btn _green" onClick={this.increment}>increment</button>
                <button className="_btn _red" onClick={this.decrement}>decrement</button>
                <button className="_btn" onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
        );
    }
}
