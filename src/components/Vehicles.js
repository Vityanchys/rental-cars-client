import React from 'react';
import Vehicle from "./Vehicle";


function Vehicles(props) {
  return (
  <div className="vehicles"> {
    props.vehicles.map ((vehicle) => {
      console.log(vehicle.pricePerDay);
      return (
        <Vehicle
          key={vehicle.id}
          image={vehicle.image}
          name={vehicle.brand + " " + vehicle.model}
          cost={vehicle.pricePerDay}
          id={vehicle.id}
        />
      )
    })}
  </div>
  );
}

export default Vehicles;