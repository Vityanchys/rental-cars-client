import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText, RaisedButton, TextField } from 'material-ui';

class SignUpForm extends Component {
  render() {
    const onSubmit = this.props.onSubmit;
    const onChange = this.props.onChange;
    const errors = this.props.errors;
    const user = this.props.user;

    return (
      <Card>
        <div style={{ display: "inline" }}>
          <h2>Регистрация</h2>

          {errors.summary && <p>{errors.summary}</p>}
          <div className="field-line">
            <TextField
              floatingLabelText="Имя"
              name="firstName"
              errorText={errors.firstName}
              onChange={onChange}
              value={user.firstName}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Фамилия"
              name="lastName"
              errorText={errors.lastName}
              onChange={onChange}
              value={user.lastName}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Пароль"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Номер паспорта"
              name="passportId"
              errorText={errors.passportId}
              onChange={onChange}
              value={user.passportId}
            />
          </div>

          {//Temporary solution
          }
          <div style={{ display: "inline-block" }}>
            <TextField
              style={{ width: 56 }}
              floatingLabelText="XX"
              name="phonePrefix"
              errorText={errors.phonePrefix}
              onChange={onChange}
              value={user.phonePrefix}
            />
            <TextField
              style={{ width: 200 }}
              floatingLabelText="Телефон"
              name="phone"
              errorText={errors.phone}
              onChange={onChange}
              value={user.phone}
            />
          </div>

          <div>
            <RaisedButton type="submit" label="Зарегистрироваться" onClick={onSubmit} primary />
          </div>

          <CardText>Уже зарегистрированы? <Link to={'/login'}>Войти</Link></CardText>

        </div>
      </Card >
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
