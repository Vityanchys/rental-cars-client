import { ServerURL } from '../../constants/Constants';

exports.register = async (user) => {
  const response = await fetch(ServerURL + 'user/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      passportId: user.passportId,
      admin: false,
      phone: "+375" + user.phonePrefix + user.phone,
    })
  })
  return response;
}

exports.login = async (user) => {
  let response;

  try {
    response = await fetch(ServerURL + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    });
  } catch (err) {
    console.log(err);
  }

  return response;
}