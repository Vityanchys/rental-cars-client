import React from 'react';
import Users from '../components/Users';
import { CircularProgress } from 'material-ui';

import UserAPI from '../services/api/UserAPI';

class UsersRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

  }

  async componentDidMount() {
    const users = await UserAPI.getAllUsers();
        this.setState({
          loaded: true,
          users: users
        });
        console.log(this.state.users);
  }

  render() {
    if (!this.state.loaded) {
      return         <CircularProgress />
    }

    return <Users
      users={this.state.users}  />;
  }
}

export default UsersRoute;
