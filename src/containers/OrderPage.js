import React from 'react';
import { Redirect } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import User from '../modules/User';
import OrderAPI from "../services/api/OrderAPI";
import VehiclesAPI from '../services/api/VehiclesAPI';
import { CircularProgress } from 'material-ui';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      ordered: false,
      orderDateTime: null,
      returnDateTime: null,
      user: User.get(),
      vehicle: null,
      order: {
        price: 0,
        days: 0
      }
    };
  }

  async componentDidMount() {
    let vehicle = await VehiclesAPI.getVehicle(this.props.match.params.id);
    this.setState({ vehicle, loaded: true })
  }

  handleDateChange = (name, value) => {
    //check date (fast solution)
    if (name === "returnDateTime") {
      const currentDate = new Date().setHours(0, 0, 0, 0);
      const pickedDate = new Date(value).setHours(0, 0, 0, 0);

      if (pickedDate < currentDate) {
        this.props.onMessage("Ошибка. Дата возврата не может быть меньше текущей даты.")
        return;
      }

      if (this.state.orderDateTime) {
        if (pickedDate < this.state.orderDateTime.setHours(0, 0, 0, 0)) {
          this.props.onMessage("Ошибка. Дата возврата не должна быть меньше даты заказа.")
          return;
        }
      }
    }
    if (name === "orderDateTime") {
      const currentDate = new Date().setHours(0, 0, 0, 0);
      const pickedDate = new Date(value).setHours(0, 0, 0, 0);

      if (pickedDate < currentDate) {
        this.props.onMessage("Ошибка. Нельзя заказать автомобиль задним числом.")
        return;
      }

      if (this.state.returnDateTime) {
        if (this.state.returnDateTime.setHours(0, 0, 0, 0) < pickedDate) {
          this.props.onMessage("Ошибка. Дата заказа не должна быть позднее даты возврата.")
          return;
        }
      }
    }

    //end check date

    let state = this.state;
    state[name] = value;

    //update order (days and price for all)
    if (state["orderDateTime"] && state["returnDateTime"]) {
      const dt1 = new Date(state["orderDateTime"]);
      const dt2 = new Date(state["returnDateTime"]);
      const days = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
      state["order"].days = days;
      if (days === 0) {
        state["order"].price = state["vehicle"].pricePerDay;
      } else {
        state["order"].price = days * state["vehicle"].pricePerDay;
      }
    }

    this.setState(state);
  };

  handleSubmit = async () => {
    if (!this.state.orderDateTime || !this.state.returnDateTime) {
      this.props.onMessage("Ошибка. Не выбрана дата.")
      return;
    }

    const order = {
      orderDateTime: new Date(this.state.orderDateTime).getTime(),
      returnDateTime: new Date(this.state.returnDateTime).getTime(),
      userId: this.state.user.id,
      carId: this.state.vehicle.id,
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
    if (!this.state.loaded) {
      return <CircularProgress />
    }
    if (this.state.ordered) {
      this.props.onMessage("Заказ выполнен успешно")
      return <Redirect to="/" />
    }
    return (
      <OrderForm
        vehicle={this.state.vehicle}
        user={this.state.user}
        order={this.state.order}
        orderDateTime={this.state.orderDateTime}
        returnDateTime={this.state.returnDateTime}
        onChange={this.handleDateChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default OrderPage;
