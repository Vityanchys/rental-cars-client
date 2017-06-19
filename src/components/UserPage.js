import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card } from 'material-ui/Card';
import User from '../modules/User';
import RaisedButton from 'material-ui/RaisedButton';



const UserPage = ({
  user,
  onDelete,
}) => (
    <Card className="vehicleInfo">
      <h1>Информация о пользователе</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img alt="img" src={user.image} style={{ maxWidth: "600px", width: "100%" }} />
        {User.get() && User.get().admin && User.get().id !== user.id &&
          <RaisedButton
            onClick={onDelete}
            label="Удалить Пользователя"
            secondary={true}
            style={{ float: 'right' }}
          />
        }
      </div>
      <div className='vehicleTable'>
        <Table>
          <TableBody
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>Имя:</TableRowColumn>
              <TableRowColumn>{user.firstName}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Фамилия:</TableRowColumn>
              <TableRowColumn>{user.lastName}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Email:</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Телефон:</TableRowColumn>
              <TableRowColumn>{user.phone}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Номер паспорта:</TableRowColumn>
              <TableRowColumn>{user.passportId}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Админ:</TableRowColumn>
              <TableRowColumn>{user.admin}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  )

export default UserPage;
