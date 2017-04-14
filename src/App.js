import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Vehicle from './components/Vehicle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Vehicle name="Mini Cooper" cost="$100" id="1" />
      </div>
    );
  }
}

export default App;
