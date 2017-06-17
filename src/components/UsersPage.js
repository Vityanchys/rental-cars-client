import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import {CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';






function UsersPage(props) {
  return (
    <Card className="usersList">
      <CardMedia
        overlay={<CardTitle title={props.firstName + " " + props.lastName}  />}
      >
      </CardMedia>
      <CardActions>
        <FlatButton label="Подробнее" href={ "users/" + props.id} />
      </CardActions>
    </Card>
  )
}


export default UsersPage;
