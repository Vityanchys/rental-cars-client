import React from 'react';
import { Card, RaisedButton } from 'material-ui';


const ProfileForm = ({
  user,
}) => (
    <Card className="container">
      <h2 className="card-heading">Личный кабинет</h2>
      <div className="profile-left">
        <div>Name: {user.firstName} {user.lastName}</div>
        <div>Email: {user.email}</div>
        <div>Pasport id: {user.passportId}</div>
        <div>Phone: {user.phone}</div>
        <div className="btn">
        <RaisedButton label="Редактировать" />
        <RaisedButton label="Избранное" />
      </div>
      </div>
    </Card>
  );


export default ProfileForm;
