var vehicles = [
  {
    name: "Mini Cooper",
    cost: "$100",
    id: "1"
  },
  {
    name: "Mini Cooper2",
    cost: "$200",
    id: "2"
  }]

exports.getVehicles = async () => {
  return vehicles;
}

exports.getVehicle = async (id) => {
  var vehicle = vehicles.find(vehicle => {
    return vehicle.id === id;
  });

  return vehicle;
}