import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.testApiCall();
    }

    testApiCall = () => {

        axios.post('https://7ullrqs7t5.execute-api.eu-west-2.amazonaws.com/default/',
            { artist: "falling in reverse", song: "drugs" }
        );
            
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}
