import React from 'react';

import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function Vehicle(props) {
  return (
    <Card className="vehicle-card">
      <CardMedia
        overlay={<CardTitle title={props.mark + " " + props.model} subtitle={props.pricePerDay + "$ (status - " + props.status + ")"} />}
      >
        <img alt="img" src={props.image} width="50%" />
      </CardMedia>
      <CardActions>
        <FlatButton label="Подробнее" href={"car/cars/" + props.id} />
        <FlatButton label="Заказать" href={"cars/" + props.id + "/order"} />
      </CardActions>
    </Card>
  )
}

export default Vehicle;