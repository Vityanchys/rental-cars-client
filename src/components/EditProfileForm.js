import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, RaisedButton, TextField } from 'material-ui';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const style = {
  marginLeft: 20,
};

class EditProfileForm extends Component {
  render() {
    const onSubmit = this.props.onSubmit;
    const onChange = this.props.onChange;
    const errors = this.props.errors;
    const user = this.props.user;

    return (
      <Card>
        <div className='editProfile'>
          <h2> Изменение пользовательской информации</h2>

          <Paper zDepth={2}>
            <TextField
              style={style}
              onChange={onChange}
              name="firstName"
              floatingLabelText="Имя"
              errorText={errors.firstName}
              underlineShow={false}
              defaultValue={user.firstName}
            />
            <Divider />
            <TextField
              name="lastName"
              floatingLabelText="Фамилия"
              onChange={onChange}
              style={style}
              underlineShow={false}
              errorText={errors.lastName}
              defaultValue={user.lastName}
            />
            <Divider />
            <TextField
              name="phone"
              floatingLabelText="Номер телефона"
              style={style}
              onChange={onChange}
              underlineShow={false}
              errorText={errors.phone}
              defaultValue={user.phone} />
            <Divider />
            <TextField
              name="passportId"
              floatingLabelText="Номер паспорта"
              style={style}
              onChange={onChange}
              underlineShow={false}
              errorText={errors.passportId}
              defaultValue={user.passportId} />
            <Divider />
            <TextField
              floatingLabelText="Пароль"
              name="password"
              style={style}
              onChange={onChange}
              underlineShow={false}
              errorText={errors.password}
              defaultValue={user.password} />
            <Divider />
          </Paper>
          <div>
            <br />
            <RaisedButton type="submit" label="Изменить" onClick={onSubmit} primary />
          </div>
        </div>
      </Card>
    );
  }
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
export default EditProfileForm;
