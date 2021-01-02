import React from 'react';
import './App.css';


class Afunction extends React.Component {
    constructor() {
      super();
      this.whatever = {
        name: "ReactDOM",
        number: 13
      };
    };
  
    render() {
      return (
        <div>
          <h1>Hello, {this.whatever.name}! Your number is {this.whatever.number}.</h1>
        </div>
      );
    };
  };

  export default Afunction;