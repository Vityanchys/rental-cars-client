import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Snackbar } from 'material-ui';

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
      authorized,
      snackbar: false,
      snackbarMessage: ""
    }

    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.deauthenticate = this.deauthenticate.bind(this);
  }

  handleRequestCloseSnackbar = () => {
    this.setState({
      snackbar: false,
      snackbarMessage: ""
    });
  };

  handleSnackbarMessage = (message) => {
    this.setState({
      snackbar: true,
      snackbarMessage: message
    });
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
            <Snackbar
              open={this.state.snackbar}
              message={this.state.snackbarMessage}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestCloseSnackbar}
            />
            <Navbar authorized={this.state.authorized} />
            <Switch>
              <Route exact path="/" render={(props) => (
                <HomePage {...props} onMessage={this.handleSnackbarMessage} />
              )} />
              {
                User.get() &&
                <div>
                  <Switch>
                    <Route path="/cars/:id/order" render={(props) => (
                      <OrderPage {...props} onMessage={this.handleSnackbarMessage} />
                    )} />
                    <Route path="/car/cars/:id" component={VehicleRoute} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/logout" render={() => (
                      <div>
                        {this.deauthenticate()}
                        < Redirect to="/" />
                      </div>
                    )} />
                    {
                      User.get().admin && <Route path="/add" render={() => (
                        <VehicleAddPage onMessage={this.handleSnackbarMessage} />
                      )} />
                    }
                    <Redirect from="/login" to="/" />
                    <Redirect from="/signup" to="/" />
                  </Switch>
                </div>
              }

              <Route path="/car/cars/:id" component={VehicleRoute} />
              <Route path="/signup" render={() => (
                <SignUpPage onMessage={this.handleSnackbarMessage} />
              )} />
              <Route path="/login" render={() => (
                <LogInPage onLoggedIn={this.onLoggedIn} />
              )} />

              <Redirect from="/cars/:id/order" to="/login" />
              <Redirect from="/profile" to="/login" />
              <Redirect from="/logout" to="/login" />
              <Redirect from="/add" to="/login" />

              <Route render={() => (
                <h1>
                  You broke the internet (404)
              </h1>
              )} />

            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
