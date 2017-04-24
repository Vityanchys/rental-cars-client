import React from "react";
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

function VehiclePage(props) {
    return (
        <div>
            <h1>Information about car</h1>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>Mark:</TableRowColumn>
                        <TableRowColumn>{props.mark}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Model:</TableRowColumn>
                        <TableRowColumn>{props.model}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Year:</TableRowColumn>
                        <TableRowColumn>{props.year}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Gearbox type:</TableRowColumn>
                        <TableRowColumn>{props.gearboxType}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Engine volume:</TableRowColumn>
                        <TableRowColumn>{props.engineVolume}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Body type:</TableRowColumn>
                        <TableRowColumn>{props.bodyType}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Capacity:</TableRowColumn>
                        <TableRowColumn>{props.capacity}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Carrying capacity:</TableRowColumn>
                        <TableRowColumn>{props.carryingCapacity}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Price per hour:</TableRowColumn>
                        <TableRowColumn>{props.pricePerHour}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Price per day:</TableRowColumn>
                        <TableRowColumn>{props.pricePerDay}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Type:</TableRowColumn>
                        <TableRowColumn>{props.type}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Status:</TableRowColumn>
                        <TableRowColumn>{props.status}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
            <img src={props.image} width="60%"/>
        </div>
    )
}

export default VehiclePage;