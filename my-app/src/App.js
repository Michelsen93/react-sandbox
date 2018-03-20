import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer'
import Card from './Components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card/>
          <h1 className="App-title">My awesome site</h1>
        </header>
        <div className="left-content">
          <p className="App-intro">
            Hello world!
          </p>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
