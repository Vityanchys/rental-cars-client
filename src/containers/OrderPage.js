import React from 'react';
import { Redirect } from 'react-router-dom';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ordered: false };
  }

  render() {
    if (this.state.ordered) {
      this.props.onMessage("Заказ выполнен успешно")
      return <Redirect to="/" />
    }
    return (
      <div>
      </div>
    )
  }
}

export default OrderPage;
