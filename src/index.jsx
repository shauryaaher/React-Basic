import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.jsx';
import Afunction from './Afunction.jsx';
import Fonts from './Fonts.jsx';
import reportWebVitals from './reportWebVitals.js';


const cool = <h1>Aren't React and ReactDOM cool?</h1>;

class Cool extends React.Component {
  constructor() {
    super();
    this.ok = "Yes they are!"
  };

  render() {
    return (
      <div>
        <h1>{this.ok}</h1>
      </div>
    );
  };
};

ReactDOM.render (
  <Cool />,
  document.getElementById('cool2')
);

ReactDOM.render(
  cool,
  document.getElementById('cool')
);


ReactDOM.render (
  <Fonts />,
  document.getElementById('fonts')
);


ReactDOM.render (
  <App name="React!" />,
  document.getElementById('reactTag')
);

ReactDOM.render (
  <Afunction />,
  document.getElementById('reactdomTag')
);



/* If you want to start measuring performance in your app, pass a function
 to log results (for example: reportWebVitals(console.log))
 or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/
reportWebVitals();
