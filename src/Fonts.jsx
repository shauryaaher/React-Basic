import React from 'react';
import './App.css';

class Fonts extends React.Component {
    constructor() {
      super();
      this.fonts = "Cool Fonts!";
    };
  
    render() {
      return (
        <div>
          <h1>{this.fonts}</h1>
        </div>
      );
    };
  
  };

  export default Fonts;