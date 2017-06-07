import React from 'react';
import { Redirect } from 'react-router-dom';

import User from '../modules/User';
import OrderAPI from "../services/api/OrderAPI";

//
import { Card, DatePicker, RaisedButton } from 'material-ui';

const OrderForm = ({
  orderDateTime,
  returnDateTime,
  onChange,
  onSubmit
 }) => {
  return (
    <div style={{ padding: "20px" }}>
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
      <RaisedButton label="Заказать" onClick={onSubmit} />
    </div>
  )
}
//

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordered: false,
      orderDateTime: null,
      returnDateTime: null,
      userId: User.get().id,
      carId: this.props.match.params.id
    };
  }

  handleDateChange = (name, value) => {
    let state = this.state;
    state[name] = value;
    this.setState(state);
  };

  handleSubmit = async () => {
    const order = {
      orderDateTime: new Date(this.state.orderDateTime).getTime(),
      returnDateTime: new Date(this.state.returnDateTime).getTime(),
      userId: this.state.userId,
      carId: this.state.carId,
      orderStatus: "ordered"
    }

    let response = await OrderAPI.add(order);
    if (response.status === 200) {
      this.setState({ ordered: true });
    } else {
      this.props.onMessage("Ошибка заказа")
    }
  }

  render() {
    if (this.state.ordered) {
      this.props.onMessage("Заказ выполнен успешно")
      return <Redirect to="/" />
    }
    return (
      <div>
        <Card>
          <OrderForm
            orderDateTime={this.state.orderDateTime}
            returnDateTime={this.state.returnDateTime}
            onChange={this.handleDateChange}
            onSubmit={this.handleSubmit}
          />
        </Card>
      </div>
    )
  }
}

export default OrderPage;
