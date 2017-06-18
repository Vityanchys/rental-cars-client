import React from "react";
import { Card } from 'material-ui/Card';
import { CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';


function UsersPage(props) {
  return (
    <div>
    <Card className="usersList">
      <CardActions>
    <List>
    <ListItem
        leftAvatar={props.image}
        style={{width: '1000px', height: '80px'}}
        primaryText={props.firstName+" "+props.lastName}
        secondaryText={'email: '+props.email+' '+'телефон: '+props.phone+' '+'админ: '+props.admin}
      />
    </List>
        <FlatButton label="Подробнее" href={"admin/users/" + props.id} />
      </CardActions>
    </Card>
  </div>

  )
}

export default UsersPage;
