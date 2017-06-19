import React from "react";
import {TableRow, TableRowColumn} from "material-ui";


function OrderHistoryPage(props) {
    {
        var orderDate = new Date(props.orderDateTime);
        var returnDate = new Date(props.returnDateTime);
    }
    return (
        <TableRow>
            <TableRowColumn>{orderDate.toLocaleDateString()}</TableRowColumn>
            <TableRowColumn>{returnDate.toLocaleDateString()}</TableRowColumn>
            <TableRowColumn>{props.orderStatus}</TableRowColumn>
        </TableRow>
    )
}

export default OrderHistoryPage;
