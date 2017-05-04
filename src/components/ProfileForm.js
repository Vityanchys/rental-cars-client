import React from 'react';
import { Link } from 'react-router-dom';
import { Card, RaisedButton  } from 'material-ui';


const ProfileForm = ({
  user,
}) => (
  <Card className="container">
      <h2 className="card-heading">Личный кабинет</h2>
    <div className="profile-left">
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Pasport id: coming soon</div>
      <div className="btn">
      <RaisedButton  label="Редактировать" />
      </div>
    </div>
</Card>
    );


export default ProfileForm;
