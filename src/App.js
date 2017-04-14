import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Vehicles from './components/Vehicles';

var vehicles = [
  {
    name: "Mini Cooper",
    cost: "$100",
    id: 1
  },
  {
    name: "Mini Cooper2",
    cost: "$200",
    id: 2
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Vehicles vehicles={vehicles} />
      </div>
    );
  }
}

export default App;
