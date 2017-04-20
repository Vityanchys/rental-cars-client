import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Регистрация</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Имя"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
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
          floatingLabelText="Телефон"
          name="phone"
          errorText={errors.phone}
          onChange={onChange}
          value={user.phone}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Уже зарегестрированы? <Link to={'/login'}>Войти</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;