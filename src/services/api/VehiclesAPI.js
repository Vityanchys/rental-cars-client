import { ServerURL } from '../../constants/Constants';
import Auth from '../../modules/Auth';

function handeResponse(response) {
  if (response.status !== 200) {
    throw new Error('Looks like there was a problem. Status Code: ' +
      response.status);
  }

  // Examine the text in the response
  return response.json().then(data => {
    return data;
  });
}

exports.getVehicles = async () => {
  let vehicles;

  try {
    const response = await fetch(ServerURL + 'car/cars')
    vehicles = response.json();
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return vehicles;
}

exports.getVehicle = async (id) => {
  let vehicle;

  try {
    const response = await fetch(ServerURL + 'car/cars/' + id);
    vehicle = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return vehicle;
}

exports.deleteVehicle = async (id) => {
  let response;

  try {
    response = await fetch(ServerURL + 'car/delete/' + id , {
      method: "DELETE",
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

exports.createVehicle = async (vehicle) => {
  let response;

  try {
    response = await fetch(ServerURL + 'car/add', {
      method: "POST",
      headers: {
        'x-auth-token': Auth.getToken(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vehicle)
    });
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return response;
}
