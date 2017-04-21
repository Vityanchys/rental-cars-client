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
    const response = await fetch(ServerURL + 'vehicles/');
    vehicles = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
  
  return vehicles;
}

exports.getVehicle = async (id) => {
 /*var vehicle = vehicles.find(vehicle => {
    return vehicle.id === id;
  });

  return vehicle;*/
}