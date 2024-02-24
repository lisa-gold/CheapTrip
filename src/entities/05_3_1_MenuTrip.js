// It is drop menu that has a link for a passenger and a link for a carrier
// It uses material-ui/core

import MenuTrip from "../components/HeaderComponent/MenuTrip/MenuTrip";

import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {DRIVER_ROUTE, PASSENGER_ROUTE} from "../utils/constants";

class MenuTrip extends Component {
    handleClick;
    handleClose;
    rowHandleClick;
    render()
    {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    TransferBuses
                </Button>

                <Menu onClose={this.handleClose}>
                    <MenuItem disabled>TransferBuses</MenuItem>
                    <MenuItem onClick={() => this.rowHandleClick(PASSENGER_ROUTE)}>I'm a passenger</MenuItem>
                    <MenuItem onClick={() => this.rowHandleClick(DRIVER_ROUTE)}>I'm a carrier</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default MenuTrip;
