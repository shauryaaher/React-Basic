import React from 'react';
import ReactDOM from 'react-dom';

class Hi extends React.Component {
    constructor () {
        super();
        this.state = {};
    }
    componentDidMount() {
            this.setState({
                color: "blue"
            });
    }
    render() {
        return (
            <h1>My favourite color is {this.state.color}.</h1>
        );
    }
}

ReactDOM.render(<Hi />, document.getElementById('root'));
// All of this was made by me. This content wasn't borrowed from anywhere.