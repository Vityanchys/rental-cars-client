import { ServerURL } from '../../constants/Constants';
import Auth from '../../modules/Auth';


exports.add = async (order) => {
  const response = await fetch(ServerURL + 'order/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'x-auth-token': Auth.getToken()
    },
    body: JSON.stringify( order )
  })
  return response;
}

exports.getHistory = async (id) => {
    let history;
    const response = await fetch(ServerURL + 'order/history/' + id, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'x-auth-token': Auth.getToken()
        },
        body: {}
    })
    history = response.json();
    return history;
}
