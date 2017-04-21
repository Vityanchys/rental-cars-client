import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function Vehicle(props) {
  return (
 <Card className="vehicle-card">
    <CardMedia
      overlay={<CardTitle title={props.name} subtitle={props.cost} />}
    >
      <img src={props.image} width="50%" />
    </CardMedia>
    <CardActions>
      <FlatButton label="Подробнее" href={"vehicles/" + props.id} />} />
      <FlatButton label="Заказать" />
    </CardActions>
  </Card>
  )
}

export default Vehicle;