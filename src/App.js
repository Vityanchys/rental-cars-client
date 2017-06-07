import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Navbar from './components/Navbar';
import HomePage from './containers/HomePage';
import VehicleRoute from './containers/VehicleRoute';
import SignUpPage from './containers/SignUpPage';
import LogInPage from './containers/LogInPage';
import VehicleAddPage from './containers/VehicleAddPage';
import ProfilePage from './containers/ProfilePage';
import OrderPage from './containers/OrderPage';
import User from './modules/User';
import Auth from './modules/Auth';

class App extends Component {
  constructor(props) {
    super(props);

    const authorized = Auth.isUserAuthenticated();
    this.state = {
      authorized
    }

    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.deauthenticate = this.deauthenticate.bind(this);
  }

  onLoggedIn() {
    this.setState({
      authorized: true
    })
  }

  deauthenticate() {
    Auth.deauthenticateUser()
    User.remove();
    this.setState({
      authorized: false
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div className="App">
            <Navbar authorized={this.state.authorized} />
            <Route exact path="/" component={HomePage} />
            <Route path="/cars/:id/order" component={OrderPage} />
            <Route path="/car/cars/:id" component={VehicleRoute} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" render={() => (
                <LogInPage onLoggedIn={this.onLoggedIn} />
            )} />
            <Route path="/add" component={VehicleAddPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/logout" render={() => (
              <div>
                {this.deauthenticate()}
                < Redirect to="/" />
              </div>
            )} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
