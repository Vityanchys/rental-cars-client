import React from 'react';
import OrderHistory from '../components/OrderHistory';
import { CircularProgress } from 'material-ui';

import OrderAPI from '../services/api/OrderAPI';

class OrderHistoryRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };

    }

    async componentDidMount() {
        const orderHistory = await OrderAPI.getHistory(this.props.match.params.id);
        this.setState({
            loaded: true,
            orderHistory: orderHistory
        });
        console.log(this.state.orderHistory);
    }

    render() {
        if (!this.state.loaded) {
            return         <CircularProgress />
        }

        return <OrderHistory
            orderHistory={this.state.orderHistory}  />;
    }
}

export default OrderHistoryRoute;

