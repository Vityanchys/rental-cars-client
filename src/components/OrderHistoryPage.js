import React from "react";
import {TableRow, TableRowColumn} from "material-ui";


function OrderHistoryPage(props) {
    {
        var orderDate = new Date(props.orderDateTime);
        var returnDate = new Date(props.returnDateTime);
        var orderStatus = "";
        if (props.orderStatus === "ordered") {
            orderStatus = "Заказан";
        }
        if (props.orderStatus === "done") {
            orderStatus = "Завершен";
        }
        if (props.orderStatus === "canceled") {
            orderStatus = "Отменён";
        }
    }
    return (
        <TableRow>
            <TableRowColumn>{orderDate.toLocaleDateString()}</TableRowColumn>
            <TableRowColumn>{returnDate.toLocaleDateString()}</TableRowColumn>
            <TableRowColumn>{orderStatus}</TableRowColumn>
        </TableRow>
    )
}

export default OrderHistoryPage;
