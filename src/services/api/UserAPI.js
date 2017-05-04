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
      phone: user.phone,
    })
  })
  return response;
}