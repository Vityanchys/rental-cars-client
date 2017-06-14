import React from 'react';
import { Link } from 'react-router-dom';
import { Card, RaisedButton } from 'material-ui';
import {List, ListItem} from 'material-ui/List';


const ProfileForm = ({
  user,
}) => (
    <Card>
    <div className="profile-left">
      <h2>Личный кабинет</h2>
      <div>
        <h2> {user.firstName} {user.lastName}</h2>
        <h3>Email:      {user.email}</h3>
        <h3>Pasport id: {user.passportId}</h3>
        <h3>Phone:      {user.phone}</h3>
        <div className="btn">
        <Link to='/editUserInformation'>
          <RaisedButton label="Редактировать" />
        </Link>
        <RaisedButton label="Избранное" />
      </div>
      </div>
      </div>
    </Card>
  );


export default ProfileForm;
