import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          About Page.
          </p>
          
        </header>
      </div>
    );
  }
}

export default About;
