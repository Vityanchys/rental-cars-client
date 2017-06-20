import React, { Component } from 'react';
import EditProfileForm from '../components/EditProfileForm';
import User from '../modules/User';
import UserAPI from "../services/api/UserAPI";
import ValidateProfile from "../services/ProfileEditValidate";

import { Redirect } from 'react-router-dom';

class EditProfileRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: User.get(),
      errors: {},
      complete: false
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
  async onSubmit(event) {
    event.preventDefault();

    const user = this.state.user;
    if (user.password === '') {
      user.password = null;
    }
    const checkResult = await ValidateProfile.checkUser(user);
    if (!checkResult.success) {
      this.props.onMessage("Ошибка изменения");
      this.setState({ errors: checkResult.errors });
      return;
    }

    try {
      let response = await UserAPI.edit(user);
      console.log('RESPONSE', response);
      console.log('User', User.get());
      if (response.status === 200) {
        this.setState({
          errors: {},
          user: user,
          complete: true,
        });
        User.update(user);
        this.props.onUserUpdate();
      } else {
        this.props.onMessage("Ошибка изменения");
        let errors = {};
        response.json().then(json => {
          errors.summary = json.errors;

          this.setState({
            errors: errors
          });
        });
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  render() {
    if (this.state.complete) {
      this.props.onMessage("Профиль обновлён успешно.")
      return <Redirect to="/profile" />
    }
    return (
      <EditProfileForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default EditProfileRoute;
