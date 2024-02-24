// A block that contains info about a specific transfer
// After adding transfers, you can see how it functions

import Transfer from "../components/Transfer/Transfer";

import React, {Component} from 'react';
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";

// transfer is given on a higher level
let transfer = {};

class Transfer extends Component {
    cityFrom;
    cityTo;
    render()
    {
        return (
            <div>
                {this.cityFrom}
                <ArrowForwardSharpIcon/>
                {this.cityTo}
                {transfer}
            </div>
        );
    }
}

export default Transfer;