import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Snackbar } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import VehicleRoute from './containers/VehicleRoute';
import SignUpPage from './containers/SignUpPage';
import LogInPage from './containers/LogInPage';
import VehicleAddPage from './containers/VehicleAddPage';
import ProfilePage from './containers/ProfilePage';
import OrderPage from './containers/OrderPage';
import EditProfileRoute from './containers/EditProfileRoute';
import UserRoute from './containers/UserRoute';
import UsersRoute from './containers/UsersRoute';
import AboutCompanyPage from './components/AboutCompanyPage';
import User from './modules/User';
import Auth from './modules/Auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: User.get(),
      snackbar: false,
      snackbarMessage: ""
    }
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

  handleUserUpdate = () => {
    this.setState({
      user: User.get()
    })
  }

  handleLogIn = () => {
    this.handleUserUpdate();
  }

  deauthenticate = () => {
    Auth.deauthenticateUser()
    User.remove();
    this.handleUserUpdate();
  }

  render() {
    const user = this.state.user;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div className="App">
            <div className="content">
              <Snackbar
                open={this.state.snackbar}
                message={this.state.snackbarMessage}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestCloseSnackbar}
              />
              <Navbar user={user} />
              <Switch>
                <Route exact path="/" render={(props) => (
                  <HomePage {...props} onMessage={this.handleSnackbarMessage} />
                )} />
                <Route path='/aboutUs' component={AboutCompanyPage} />
                {
                  user &&
                  <Switch>
                    <Route path="/cars/:id/order" render={(props) => (
                      <OrderPage {...props} onMessage={this.handleSnackbarMessage} />
                    )} />
                    <Route path="/cars/:id" render={(props) => (
                      <VehicleRoute {...props} onMessage={this.handleSnackbarMessage} />
                    )} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path='/users' component={UsersRoute} />
                    <Route path='/editUserInformation' render={(props) => (
                      <EditProfileRoute {...props} onUserUpdate={this.handleUserUpdate} />
                    )} />
                    <Route path="/logout" render={() => (
                      <div>
                        {this.deauthenticate()}
                        < Redirect to="/" />
                      </div>
                    )} />
                    {
                      user.admin &&
                      <div>
                        <Route path="/add" render={() => (
                          <VehicleAddPage onMessage={this.handleSnackbarMessage} />
                        )} />
                        <Route path="/admin/users/:id" component={UserRoute} />
                      </div>
                    }
                    <Redirect from="/login" to="/" />
                    <Redirect from="/signup" to="/" />
                  </Switch>
                }

                <Route path="/cars/:id" component={VehicleRoute} />
                <Route path="/signup" render={() => (
                  <SignUpPage onMessage={this.handleSnackbarMessage} />
                )} />
                <Route path="/login" render={() => (
                  <LogInPage onLoggedIn={this.handleLogIn} />
                )} />

                <Redirect from="/cars/:id/order" to="/login" />
                <Redirect from="/profile" to="/login" />
                <Redirect from="/editUserInformation" to="/login" />
                <Redirect from="/logout" to="/login" />
                <Redirect from="/add" to="/login" />

                <Route render={() => (
                  <h1>
                    You broke the internet (404)
              </h1>
                )} />

              </Switch>
            </div>
            <div className="footer" >
              <Footer />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
