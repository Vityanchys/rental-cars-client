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
                  <TableRowColumn>Марка автомобиля:</TableRowColumn>
                  <TableRowColumn>{vehicle.mark}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Модель:</TableRowColumn>
                  <TableRowColumn>{vehicle.model}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Год выпуска:</TableRowColumn>
                  <TableRowColumn>{vehicle.year}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Тип КПП:</TableRowColumn>
                  <TableRowColumn>{vehicle.gearboxType}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Объём двигателя, куб.см.:</TableRowColumn>
                  <TableRowColumn>{vehicle.engineVolume}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Тип кузова:</TableRowColumn>
                  <TableRowColumn>{vehicle.bodyType}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Количество мест:</TableRowColumn>
                  <TableRowColumn>{vehicle.capacity}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Грузоподъёмность:</TableRowColumn>
                  <TableRowColumn>{vehicle.carryingCapacity}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Цена за час, USD:</TableRowColumn>
                  <TableRowColumn>{vehicle.pricePerHour}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Цена за день, USD:</TableRowColumn>
                  <TableRowColumn>{vehicle.pricePerDay}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Тип:</TableRowColumn>
                  <TableRowColumn>{vehicle.type}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Статус:</TableRowColumn>
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
