import React, { Component } from 'react';
import LogInForm from '../components/LogInForm';
import { Redirect } from 'react-router-dom';
import UserAPI from '../services/api/UserAPI';
import User from '../modules/User';
import Auth from '../modules/Auth';


class LogInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      authorized: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();

    let response = await UserAPI.login(this.state.user);

    if (response.status === 200) {
      response = await response.json();
      User.set(response.user);
      Auth.authenticateUser(response.token);
      
      this.setState({
        errors: {},
        authorized: true
      });

      this.props.onLoggedIn();
    } else {
      response = await JSON.stringify(response);
      const errors = response.errors ? response.errors : {};
      errors.summary = "Неправильный логин или пароль";

      this.setState({
        errors
      });
    }
  }

  //@param {object} event - the JavaScript event object
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    if (this.state.authorized) {
      return <Redirect to="/" />
    }
    return (
      <LogInForm
        onSubmit={this.onSubmit}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LogInPage;