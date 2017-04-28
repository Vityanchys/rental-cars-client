import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
/*import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';*/
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import Navbar from './components/Navbar';
import VehiclesRoute from './containers/VehiclesRoute';
import VehicleRoute from './containers/VehicleRoute';
import SignUpPage from './containers/SignUpPage';
import LogInPage from './containers/LogInPage';
import ProfilePage from './containers/ProfilePage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={VehiclesRoute} />
            <Route path="/car/cars/:id" component={VehicleRoute} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LogInPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
