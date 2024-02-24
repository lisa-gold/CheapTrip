// This component chooses which logo to display depending on what page is active

import { LogoHeader } from "../components/HeaderComponent/Logos/Logos";

import React, {Component} from 'react';
import {MAIN_ROUTE, PASSENGER_ROUTE} from "../utils/constants";
import {NavLink} from "react-router-dom";

class Logo extends Component {
    page_mode = "CheapTrip"; // or "TransferBuses"

    logoBus = () => { //some code
        return <NavLink to={PASSENGER_ROUTE}>
            <span >TransferBuses</span>
        </NavLink>
    };
    logoTrip = () => { //some code
        return <NavLink to={MAIN_ROUTE}>
            <span >CheapTrip</span>
        </NavLink>};
    render()
    {if (this.page_mode === "CheapTrip") {
        this.logoTrip();
    }
    else {
        this.logoBus();
    }
    }
}

export default Logo;
