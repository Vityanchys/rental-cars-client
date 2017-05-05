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
    this.setState({ user: { firstName: 'Viktar', lastName: 'Denisov', email: 'vityanchys@gmail.com', passportId: 'KH2209343', phone: '375291233219'  } })
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
