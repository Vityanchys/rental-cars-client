import React from 'react';
import UserPage from '../components/UserPage';
import { CircularProgress } from 'material-ui';
import { Dialog, FlatButton } from 'material-ui';
import { Redirect } from 'react-router-dom';


import UserAPI from '../services/api/UserAPI';

class UserRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, openDeleteDialog: false };

  }

  componentDidMount() {
    UserAPI.getUser(this.props.match.params.id).then(
      user => {
        this.setState({
          loaded: true,
          user: user,
          deleted: false
        });
        console.log(this.state.user);

      });
  }

  handleDeleteUser = () => {
    this.setState({ openDeleteDialog: true})
  }

  deleteUser = async () => {
    this.setState({ openDeleteDialog: false });
    let response = await UserAPI.deleteUser(this.state.user.id);
    if (response.status === 200) {
      this.setState({ deleted: true });
      this.props.onMessage('Пользователь успешно удалён.');
    } else {
      this.props.onMessage('Ошибка удаления.');
    }
  }

  handleOpen = () => {
    this.setState({ openDeleteDialog: true });
  };

  handleClose = () => {
    this.setState({ openDeleteDialog: false });
  };

  render() {
    if (this.state.deleted) {
      return <Redirect to="/" />
    }
    if (!this.state.loaded) {
      return <CircularProgress />
    }

    return (
      <div>
        <Dialog
          title="Подтверждение удаления"
          actions={
            <div>
              <FlatButton
                label="Отмена"
                primary={true}
                onTouchTap={this.handleClose}
              />
              <FlatButton
                label="Удалить"
                primary={true}
                onTouchTap={this.deleteUser}
              />
            </div>
          }
          modal={false}
          open={this.state.openDeleteDialog}
          onRequestClose={this.handleClose}
        >
          Действительно удалить данного пользователя?
        </Dialog>
        <UserPage
          user={this.state.user}
          onDelete={this.handleDeleteUser}
          />
      </div>
    )
  }
}

export default UserRoute;
