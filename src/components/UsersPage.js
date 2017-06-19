import React from "react";
import { Card } from 'material-ui/Card';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import { List, ListItem } from 'material-ui/List';


function UsersPage(props) {
  return (
    <div>
      <Card className="usersList">
        <CardActions>
          <List>
            <ListItem
              leftAvatar={props.image}
              style={{ width: '1000px', height: '80px' }}
              primaryText={props.firstName + " " + props.lastName}
              secondaryText={'email: ' + props.email + ' телефон: ' + props.phone + ' админ: ' + props.admin}
            />
          </List>
          <FlatButton label="Подробнее" href={"admin/users/" + props.id} />
        </CardActions>
      </Card>
    </div>

  )
}

export default UsersPage;
