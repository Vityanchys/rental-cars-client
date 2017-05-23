import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../modules/User';

class Navbar extends Component {
  render() {
    if (this.props.authorized) {
      const user = User.get();
      return (
        <div className="navbar">
          <div className="navbar-left">
            <Link to="/">Главная</Link>
          </div>
          <div className="navbar-right">
            {user.admin && <Link to="/add">Добавить Т/С</Link>}
            <Link to="/profile">{user.firstName} (ЛК)</Link>
            <Link to="/logout">Выход</Link>
          </div>
        </div>
      )
    }
    return (
      <div className="navbar" >
        <div className="navbar-left">
          <Link to="/">Главная</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">Вход</Link>
          <Link to="/signup">Регистрация</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;