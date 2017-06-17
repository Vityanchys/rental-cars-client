import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';




const VehiclePage = ({
  vehicle,
  errors,
  id,
  onDelete,
}) => (

      <Card className="vehicleInfo">
      <h1>Информация о Т/С</h1>
      <RaisedButton
        onClick={onDelete}
        label="Удалить Т/С"
        secondary={true}
        style={{float: 'right'}}
       />

      <div className='imgVehicleTable'>
        <img alt="img" src={vehicle.image} width="100%"/>
      </div>
      <div className='vehicleTable'>
      <Table>
        <TableBody
        displayRowCheckbox={false}
        >
          <TableRow>
            <TableRowColumn>Mark:</TableRowColumn>
            <TableRowColumn>{vehicle.mark}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Model:</TableRowColumn>
            <TableRowColumn>{vehicle.model}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Year:</TableRowColumn>
            <TableRowColumn>{vehicle.year}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Gearbox type:</TableRowColumn>
            <TableRowColumn>{vehicle.gearboxType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Engine volume:</TableRowColumn>
            <TableRowColumn>{vehicle.engineVolume}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Body type:</TableRowColumn>
            <TableRowColumn>{vehicle.bodyType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Capacity:</TableRowColumn>
            <TableRowColumn>{vehicle.capacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Carrying capacity:</TableRowColumn>
            <TableRowColumn>{vehicle.carryingCapacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Price per hour:</TableRowColumn>
            <TableRowColumn>{vehicle.pricePerHour}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Price per day:</TableRowColumn>
            <TableRowColumn>{vehicle.pricePerDay}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Type:</TableRowColumn>
            <TableRowColumn>{vehicle.type}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Status:</TableRowColumn>
            <TableRowColumn>{vehicle.status}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </Card>
);



export default VehiclePage;
