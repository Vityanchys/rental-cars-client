import { ServerURL } from '../../constants/Constants';
import Auth from '../../modules/Auth';

function handeResponse(response) {
  if(response.status !== 200) {
    throw new Error('Looks like there was a problem. Status Code: ' +
      response.status);
  }

  // Examine the text in the response
  return response.json().then(data => {
    return data;
  });
}

exports.getAllUsers = async () => {
  let users;

  try {
    const response = await fetch(ServerURL + 'user/users', {
      method: 'GET',
      headers: {
        'x-auth-token': Auth.getToken()
      },
      body: {}
    });
    users = response.json();
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
  console.log(users);
  return users;
}

exports.getUser = async (id) => {
  let user;

  try {
    const response = await fetch(ServerURL + '/user/users/' + id, {
      method: "GET",
      headers: {
        'x-auth-token': Auth.getToken()
      },
      body: {}
    }
  );
    user = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return user;
}

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

exports.edit = async (user) => {
  const response = await fetch(ServerURL + 'user/edit', {
    method: 'PUT',
    headers: {
      'x-auth-token': Auth.getToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      passportId: user.passportId,
      phone: user.phone,
      email: user.email,
      admin: false,
      password: user.password
    })
  })
  return response;
}

exports.deleteUser = async (id) => {
  let response;

  try {
    response = await fetch(ServerURL + 'user/delete/' + id, {
      method: 'DELETE',
      headers: {
        'x-auth-token': Auth.getToken(),
        "Content-Type": "application/json"
      },
      body: {}
    });
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
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
