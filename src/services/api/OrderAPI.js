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
