import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../modules/User';
import { AppBar, IconButton, MenuItem, Drawer, Divider, FlatButton } from 'material-ui';
import {
  ActionAccountBox, ActionHome, ActionInput,
  SocialPersonAdd, ActionCode,
  ActionHighlightOff, ContentAddCircle
} from 'material-ui/svg-icons/';

const TopNavbar = ({ user }) => {
  return (
    <div className='navbar-top'>
      <div style={{ float: "left" }}>
        <Link to="/">
          <FlatButton label="Главная" labelStyle={{ color: "white" }} />
        </Link>
      </div>

      <div style={{ float: "right" }}>
        {user ?
          <div>
            {user.admin &&
              <Link to="/add">
                <FlatButton label="Добавить Т/С" labelStyle={{ color: "white" }} />
              </Link>
              &&
              <Link to="/user/users">
                <FlatButton label="Пользователи" labelStyle={{ color: "white" }} />
              </Link>
            }
            <Link to="/profile">
              <FlatButton label={user.firstName} labelStyle={{ color: "white" }} />
            </Link>
            <Link to="/logout">
              <FlatButton label="Выход" labelStyle={{ color: "white" }} />
            </Link>
          </div>
          :
          <div>
            <Link to="/login">
              <FlatButton label="Вход" labelStyle={{ color: "white" }} />
            </Link>
            <Link to="/signup">
              <FlatButton label="Регистрация" labelStyle={{ color: "white" }} />
            </Link>
          </div>
        }
      </div>
    </div>
  );
}

const LeftNavbar = ({ user, onTouchTap }) => {
  return (
    <div className='navbar-left'>
      <Link to={"/"}>
        <MenuItem primaryText="Главная" onTouchTap={onTouchTap} leftIcon={<ActionHome />} />
      </Link>
      <Divider />

      {user ?
        <div>
          {user.admin &&
            <Link to="/add">
              <MenuItem primaryText="Добавить Т/С" onTouchTap={onTouchTap} leftIcon={<ContentAddCircle />} />
            </Link>
          }
          <Link to="/profile">
            <MenuItem primaryText={user.firstName} onTouchTap={onTouchTap} leftIcon={<ActionAccountBox />} />
          </Link>
          <Link to="/logout">
            <MenuItem primaryText="Выход" onTouchTap={onTouchTap} leftIcon={<ActionHighlightOff />} />
          </Link>
        </div>
        :
        <div>
          <Link to="/login">
            <MenuItem primaryText="Вход" onTouchTap={onTouchTap} leftIcon={<ActionInput />} />
          </Link >
          <Link to="/signup">
            <MenuItem primaryText="Регистрация" onTouchTap={onTouchTap} leftIcon={<SocialPersonAdd />} />
          </Link >
        </div>
      }
    </div>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };
  }

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  handleDrawerClose = () => this.setState({ drawerOpen: false });

  render() {
    const user = User.get();
    return (
      <div className="navbar">
        <div className="navbar-top">
          <AppBar
            showMenuIconButton={false}
            title={<TopNavbar user={user} />}
          />
        </div>
        <div className="navbar-left">
          <Drawer
            docked={false}
            open={this.state.drawerOpen}
            onRequestChange={(drawerOpen) => this.setState({ drawerOpen })}
            style={{ textAlign: "left" }}
          >
            <LeftNavbar user={user} onTouchTap={this.handleDrawerClose} />
          </Drawer>
          <AppBar
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
            iconElementRight={
              <a href="https://github.com/mick842/rental-cars-client" >
                <IconButton iconStyle={{ color: "white" }}>
                  <ActionCode />
                </IconButton>
              </a>
            }
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
