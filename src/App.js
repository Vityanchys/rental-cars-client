import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Vehicles from './components/Vehicles';
import SignUp from './components/SignUp';

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
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => (
            <Vehicles vehicles={vehicles} />
          )}/>
          <Route exact path="/signup" render={() => (
            <SignUp />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
