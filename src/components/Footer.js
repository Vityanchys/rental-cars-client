import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class Footer extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={
          <div style={{ fontSize: "small" }}>
            © 2017
          </div>
        }
      ></AppBar>
    );
  }
}

export default Footer;