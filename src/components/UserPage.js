import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';




const UserPage = ({
  user
}) => (

      <Card className="vehicleInfo">
      <h1>Информация о пользователе</h1>


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
        </TableBody>
      </Table>
      </div>
    </Card>
);



export default UserPage;
