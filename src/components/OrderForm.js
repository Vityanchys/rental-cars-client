import React from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardText,
    CardTitle,
    DatePicker,
    FlatButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui";

const OrderForm = ({
  vehicle,
  freeDates,
  user,
  order,
  orderDateTime,
  returnDateTime,
  onChange,
  onSubmit
 }) => {
  return (
    <Card className="card-vehicle-order">
      <CardHeader
        title={user.lastName + " " + user.firstName}
        subtitle={user.passportId}
        avatar={user.avatar}
        style={{ textAlign: "left" }}
      />
      <CardMedia
        overlay={<CardTitle title={vehicle.mark} subtitle={vehicle.model + " (" + vehicle.year + ")"} />}
      >
        <img src={vehicle.image} alt="" />
      </CardMedia>
      <CardTitle title={"Стоимость: $" + order.price + " (Дней: " + order.days + ")"} subtitle={"Стоимость за сутки: $" + vehicle.pricePerDay} />
        <div className="vehicles">
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Свободные даты</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        freeDates.map((date) => {
                            return <TableRow>
                                <TableRowColumn>
                                    {date.date}
                                </TableRowColumn>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </div>
      <CardText>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
          <DatePicker
            floatingLabelText="Дата заказа"
            value={orderDateTime}
            onChange={(event, date) => {
              onChange("orderDateTime", date);
            }}
          />
          <DatePicker
            floatingLabelText="Дата возврата"
            value={returnDateTime}
            onChange={(event, date) => {
              onChange("returnDateTime", date);
            }}
          />
        </div>
      </CardText>
      <CardActions>
        <FlatButton label="Заказать" onClick={onSubmit} />
      </CardActions>
    </Card>
  )
}

export default OrderForm;
