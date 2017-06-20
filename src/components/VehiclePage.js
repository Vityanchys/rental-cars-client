import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import User from '../modules/User';

const VehiclePage = ({
  vehicle,
  errors,
  id,
  onDelete,
}) => (

    <Card className="card-vehicle-page">
      <CardText>
        <h1>Информация об автомобиле</h1>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center"}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img alt="img" src={vehicle.image} style={{ maxWidth: "600px", width: "100%" }} />
            {User.get() && User.get().admin &&
              <RaisedButton
                onClick={onDelete}
                label="Удалить Т/С"
                secondary={true}
                style={{ float: 'right' }}
              />
            }
          </div>
          <div style={{ maxWidth: "600px" }}>
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
        </div>
      </CardText>
    </Card>
  )

export default VehiclePage;
