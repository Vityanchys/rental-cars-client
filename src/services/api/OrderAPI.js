import { ServerURL } from '../../constants/Constants';

exports.add = async (order) => {
  const response = await fetch(ServerURL + 'order/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( order )
  })
  return response;
}