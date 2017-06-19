import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={
          <div style={{ fontSize: "small" }}>
            <div style={{ float: 'left'}}>
            <Link to="/aboutUs">
              <FlatButton label="О компании"  labelStyle={{ color: "white" , fontSize: 'small'}}/>
            </Link>
            <Link to="/contacts">
              <FlatButton label="Контакты"  labelStyle={{ color: "white" , fontSize: 'small'}}/>
            </Link>
            </div>
            <div>
              © 2017
            </div>
          </div>
        }
      ></AppBar>
    );
  }
}

export default Footer;
