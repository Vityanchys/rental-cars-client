import React from 'react';
import UserPage from '../components/UserPage';
import { CircularProgress } from 'material-ui';

import UserAPI from '../services/api/UserAPI';

class UserRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

  }

  componentDidMount() {
    UserAPI.getUser(this.props.match.params.id).then(
      user => {
        this.setState({
          loaded: true,
          user: user
        });
      });
  }

    handleUser = async (event) => {
    event.preventDefault();
    console.log('onDelete');

    let response = await UserAPI.deleteUser(this.state.user.id);

    console.log('sdfasf', response);

  }

  render() {
    if (!this.state.loaded) {
      return         <CircularProgress />
    }

    return <UserPage
      user={this.state.user}
      />;
  }
}

export default UserRoute;
