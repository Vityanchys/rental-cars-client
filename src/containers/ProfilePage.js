import React, { Component } from 'react';
import ProfileForm from '../components/ProfileForm';
import User from '../modules/User';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: User.get()
    };

  }

  render() {
    return (
      <ProfileForm
        user={this.state.user}
      />
    );
  }

}

export default ProfilePage;
