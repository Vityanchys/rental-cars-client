import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={
          <div>
            <div className="item-desktop">
              <div style={{
                fontSize: "small",
                display: "flex",
                justifyContent: "center"
              }}>

                <div style={{
                  order: "-1",
                  position: "absolute",
                  top: "0",
                  left: "24px"
                }}>
                  <Link to="/aboutUs">
                    <FlatButton label="О компании" labelStyle={{ color: "white", fontSize: 'small' }} />
                  </Link>
                  <Link to="/contacts">
                    <FlatButton label="Контакты" labelStyle={{ color: "white", fontSize: 'small' }} />
                  </Link>
                </div>

                <div style={{
                  justifyContent: "space-around",
                }}>
                  © 2017
                </div>
              </div>
            </div>

            <div className="item-mobile">
              <div style={{ float: "left" }}>
                <Link to="/aboutUs">
                  <FlatButton label="О компании" labelStyle={{ color: "white", fontSize: 'small' }} />
                </Link>
                <Link to="/contacts">
                  <FlatButton label="Контакты" labelStyle={{ color: "white", fontSize: 'small' }} />
                </Link>
              </div>

              <div style={{ float: "right", fontSize: "small" }}>
                © 2017
              </div>
            </div>
          </div>
        }
      ></AppBar>
    );
  }
}

export default Footer;
