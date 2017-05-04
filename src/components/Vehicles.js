import React from 'react';
import Vehicle from "./Vehicle";


function Vehicles(props) {
  return (
    <div className="vehicles"> {
      props.vehicles.map((vehicle) => {
        return <Vehicle
          key={vehicle.id}
          mark={vehicle.mark}
          model={vehicle.model}
          image={vehicle.image}
          pricePerDay={vehicle.pricePerDay}
          status={vehicle.status}
          id={vehicle.id}
        />
      })}
    </div>
  );
}

export default Vehicles;