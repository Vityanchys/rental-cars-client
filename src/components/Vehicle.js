import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function Vehicle(props) {
  return (
 <Card className="vehicle-card">
    <CardMedia
      overlay={<CardTitle title={props.mark + " " + props.model} subtitle={props.pricePerDay + "$ (status - " + props.status + ")"} />}
    >
      <img src={props.image} width="50%" />
    </CardMedia>
    <CardActions>
      <FlatButton label="Подробнее" href={"car/cars/"+props.id} />
      <FlatButton label="Заказать" />
    </CardActions>
  </Card>
  )
}

export default Vehicle;