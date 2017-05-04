import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';
import UserAPI from "../services/api/UserAPI";
import Validate from "../services/Validate";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passportId: '',
        phone: '',
        phonePrefix: ''
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  //@param {object} event - the JavaScript event object
  onSubmit(event) {
    event.preventDefault();

    this.setState({
      errors: {}
    });
    
    Validate.checkUser(this.state.user).then(result => {
      if (result.success) {
        UserAPI.register(this.state.user).then(response => {
          if (response.status === 200) {
            alert('Registration complete');
          }
        })
      } else {
        this.setState({
          errors: result.errors
        });
      }
    })
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUpPage;