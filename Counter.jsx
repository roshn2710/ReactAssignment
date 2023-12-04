import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
    }
  
    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
			</div>
        );
    }
}

export default Counter;