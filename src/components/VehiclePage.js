import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function VehiclePage(props) {
  return (
    <div>
      <h1>To be designed</h1>
      <ul>
        <li>Name: {props.name}</li>
        <li>Cost: {props.cost}</li>
      </ul>
      <img src={props.image} width="600" />
    </div>
  )
}

export default VehiclePage;