import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import VehiclesRoute from './containers/VehiclesRoute';
import VehicleRoute from './containers/VehicleRoute';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={VehiclesRoute} />
          <Route exact path="/vehicles/:id" component={VehicleRoute} />
          <Route exact path="/signup" render={() => (
            <SignUp />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
