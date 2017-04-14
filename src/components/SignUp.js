import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    }

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  handleUsernameInput(event){
    this.setState({
      username: event.target.value
    });
  }

  handleEmailInput(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleConfirmPasswordInput(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  saveAndContinue(e) {
    if (this.state.username === "" || this.state.username === null ||
        this.state.email === "" ||this.state.email === null ||
        this.state.passsword === "" ||this.state.passsword === null ||
        this.state.confirmPassword === "" || this.state.confirmPassword === null) {
      alert('Не все поля заполнены');
      return;
    }
    if (this.state.password != this.state.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    var data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.passsword,
      confirmPassword: this.state.confirmPassword
    }

    alert(JSON.stringify(data));
  }

  render() {
    return (
      <div className="signup">
        <h1>Регистрация</h1>
          <input
            placeholder="Имя пользователя" 
            value={this.state.username}
            onChange={this.handleUsernameInput} 
          /> 
          <input
            placeholder="Электронная почта" 
            value={this.state.email}
            onChange={this.handleEmailInput} 
          />

          <input 
            type="password"
            placeholder="Пароль" 
            value={this.state.passsword}
            onChange={this.handlePasswordInput} 
          /> 

          <input 
            type="password"
            placeholder="Подтверждение пароля" 
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordInput} 
          /> 

          <button 
            onClick={this.saveAndContinue}
            type="submit" >
            Зарегистрироваться
          </button>
      </div>
    );
  } 
}
    
module.exports = SignUp;