// Functionality is not clear

import { PassengerPage } from "../components";

import React, {Component} from 'react';
import FiltersCitiesFrom from "../components/FiltersCitysFrom/FiltersCitiesFrom";
import {LinearProgress} from "@material-ui/core";
import TransferCardComponent from "../components/future/TransferCard/TransferCardComponent";
import Transfer from "../components/Transfer/Transfer";

class PassengerPage extends Component {
    transfersData = [];
    render()
    {
        return (
            <div>
                <FiltersCitiesFrom />
                <LinearProgress />
                {this.transfersData.map((transfer, i) => <TransferCardComponent key={i} transfer={transfer} />)}
                {/*or*/}
                {this.transfersData.map((transfer, i) => <Transfer key={i} transfer={transfer} />)}
            </div>
        );
    }
}

export default PassengerPage;