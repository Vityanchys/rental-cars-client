import { ServerURL } from '../../constants/Constants';

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
    const response = await fetch(ServerURL + 'car/cars');
    vehicles = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return vehicles;
}

exports.getVehicle = async (id) => {
  let vehicle;

  try {
    const response = await fetch(id);
    vehicle = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return vehicle;
}

exports.createVehicle = async (vehicle) => {
  let response;

  try {
    response = await fetch(ServerURL + 'car/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vehicle })
    });
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return response;
}