import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hello: "Hello",
            number: -13
        };
    };

    render() {
        return (
        <div>
            <h1>{this.state.hello}, {this.props.name} Your number is {this.state.number}.</h1>
        </div>
        );
    };
};

 

export default App;
