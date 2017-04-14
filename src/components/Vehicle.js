import React from 'react';

function Vehicle(props) {
  return (
    <div className="vehicle">
      <h1>{props.name}</h1>
      Стоимость: {props.cost}
      <br />
      <a href={"/vehicles/"+props.id}>Подробнее</a>
    </div>
  );
}

export default Vehicle;