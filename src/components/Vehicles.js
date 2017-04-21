import React from 'react';
import Vehicle from "./Vehicle";


function Vehicles(props) {
  return (
  <div className="vehicles"> {
    props.vehicles.map ((vehicle) => {
      return <Vehicle key={vehicle.id} image={vehicle.image} name={vehicle.name} cost={vehicle.cost} id={vehicle.id} />
    })}
  </div>
  );
}

export default Vehicles;