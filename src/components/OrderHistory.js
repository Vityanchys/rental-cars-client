import React from 'react';
import OrderHistoryPage from "./OrderHistoryPage";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui";


function OrderHistory(props) {
    return (
        <div className="vehicles">
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Дата начала заказа</TableHeaderColumn>
                        <TableHeaderColumn>Дата окончания заказа</TableHeaderColumn>
                        <TableHeaderColumn>Статус заказа</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        props.orderHistory.map((order) => {
                            return <OrderHistoryPage
                                key={order.id}
                                order={order}
                                orderDateTime={order.orderDateTime}
                                returnDateTime={order.returnDateTime}
                                orderStatus={order.orderStatus}
                                id={order.id}
                            />
                        })
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default OrderHistory
