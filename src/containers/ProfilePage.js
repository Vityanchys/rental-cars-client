import React, { Component } from 'react';
import ProfileForm from '../components/ProfileForm';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    };

  }
  componentDidMount() {
    this.setState({ user: { name: "name", email: "email" } })
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
