import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, RaisedButton } from "material-ui";

import User from '../modules/User';
import defaultAvatar from '../images/avatar.png';


class ProfilePage extends Component {
  render() {
    const user = User.get();
    return (
      <Card>
        <div className="profile">
          <h1>Личный кабинет</h1>
          <div>
            <h2> {user.firstName} {user.lastName}</h2>
            <img alt="img" src={user.avatar || defaultAvatar} width="50%" />
            <h3>Email:      {user.email}</h3>
            <h3>Pasport id: {user.passportId}</h3>
            <h3>Phone:      {user.phone}</h3>
            <div className="btn">
              <Link to='/editUserInformation'>
                <RaisedButton label="Редактировать" />
              </Link>
              <RaisedButton label="История" href={"getOrderHistory/" + user.id} />
              <RaisedButton label="Избранное" />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProfilePage;
