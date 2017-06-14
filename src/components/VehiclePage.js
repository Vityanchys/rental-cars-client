import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import {Card} from 'material-ui/Card';


function VehiclePage(props) {
  return (
    <div>
      <Card className="vehicleInfo">
      <h1>Информация о Т/С</h1>

      <div className='imgVehicleTable'>
        <img alt="img" src={props.image} width="100%"/>
      </div>
      <div className='vehicleTable'>
      <Table>
        <TableBody
        displayRowCheckbox={false}
        >
          <TableRow>
            <TableRowColumn>Mark:</TableRowColumn>
            <TableRowColumn>{props.mark}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Model:</TableRowColumn>
            <TableRowColumn>{props.model}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Year:</TableRowColumn>
            <TableRowColumn>{props.year}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Gearbox type:</TableRowColumn>
            <TableRowColumn>{props.gearboxType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Engine volume:</TableRowColumn>
            <TableRowColumn>{props.engineVolume}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Body type:</TableRowColumn>
            <TableRowColumn>{props.bodyType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Capacity:</TableRowColumn>
            <TableRowColumn>{props.capacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Carrying capacity:</TableRowColumn>
            <TableRowColumn>{props.carryingCapacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Price per hour:</TableRowColumn>
            <TableRowColumn>{props.pricePerHour}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Price per day:</TableRowColumn>
            <TableRowColumn>{props.pricePerDay}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Type:</TableRowColumn>
            <TableRowColumn>{props.type}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Status:</TableRowColumn>
            <TableRowColumn>{props.status}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </Card>
    </div>
  )
}

export default VehiclePage;
