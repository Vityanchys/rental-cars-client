import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function VehiclePage(props) {
  return (
    <div>
      <h1>To be designed</h1>
      <ul style={{"list-style-type": "none"}}>
        <li>Тип кузова: {props.bodyType}</li>
        <li>Марка: {props.brand}</li>
        <li>Модель: {props.model}</li>
        <li>Регистрационный номер: {props.registrationNumber}</li>
      </ul>
      <img src={props.image} width="600" />
    </div>
  )
}

export default VehiclePage;