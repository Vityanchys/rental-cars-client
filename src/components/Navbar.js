import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Главная</Link>
      </div>
      <div className="navbar-right">
        <Link to="/add">Добавить Т/С</Link>
        <Link to="/login">Вход</Link>
        <Link to="/signup">Регистрация</Link>
      </div>
    </div>
  );
}

export default Navbar;