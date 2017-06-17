import defaultAvatar from '../images/avatar.png';

class User {

  static set(user) {
    if (!user.avatar) {
      user.avatar = defaultAvatar;
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  static get() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static update(user) {
    if (this.get()) {
      this.remove();
    }
    this.set(user);

  }
  static remove() {
    localStorage.removeItem('user');
  }

  static put(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
export default User;
