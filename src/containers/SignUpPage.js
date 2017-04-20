import React, { PropTypes, Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';
import { ServerURL } from '../constants/Constants';


class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        lastName: '',
        password: '',
        phone: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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

  //@param {object} event - the JavaScript event object
  processForm(event) {
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const lastName = encodeURIComponent(this.state.user.lastName);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const phone = encodeURIComponent(this.state.user.phone);
    const formData = `name=${name}&lastName=${lastName}&email=${email}&password=${password}&phone=${phone}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', ServerURL + 'auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success, change the component-container state
        this.setState({
          errors: {}
        });

        alert("OK");
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;