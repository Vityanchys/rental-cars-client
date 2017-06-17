import React from "react";
import { Card } from 'material-ui/Card';
import { CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function UsersPage(props) {
  return (
    <Card className="usersList">
      <CardMedia
        overlay={<CardTitle title={props.firstName + " " + props.lastName} />}
      >
      </CardMedia>
      <CardActions>
        <FlatButton label="Подробнее" href={"users/" + props.id} />
      </CardActions>
    </Card>
  )
}

export default UsersPage;