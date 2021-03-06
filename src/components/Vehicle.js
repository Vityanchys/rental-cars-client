import React from 'react';

import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function Vehicle(props) {
  return (
    <Card className="vehicle-card">
      <CardMedia
        overlay={<CardTitle title={props.mark + " " + props.model + ", " + props.year + "г"} subtitle={props.pricePerDay + "$/день (Тип КПП - " + props.gearbox + ")"} />}
      >
        <img alt="img" src={props.image} width="50%" />
      </CardMedia>
      <CardActions>
        <FlatButton label="Подробнее" href={"cars/" + props.id} />
        <FlatButton label="Заказать" href={"cars/" + props.id + "/order"} />
      </CardActions>
    </Card>
  )
}

export default Vehicle;