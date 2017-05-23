class User {

  static set(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static get() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static remove() {
    localStorage.removeItem('user');
  }
  
}

export default User;