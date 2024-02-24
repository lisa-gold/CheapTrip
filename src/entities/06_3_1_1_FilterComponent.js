// Filter that takes a city from which you want to start

import FilterComponent from "../components/Filter/FilterComponent";

import React, {Component} from 'react';
import {Autocomplete} from "@material-ui/lab";

class FilterComponent extends Component {
    render()
    {
        return (
            <div>
                <Autocomplete/>
            </div>
        );
    }
}

export default FilterComponent;