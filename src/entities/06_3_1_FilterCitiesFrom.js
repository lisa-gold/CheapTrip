// Filter that takes a city from which you want to start
// ? Should be joined with FilterComponent

import FiltersCitiesFrom from "../components/FiltersCitysFrom/FiltersCitiesFrom";

import React, {Component} from 'react';
import FilterComponent from "../components/Filter/FilterComponent";
import i18n from "../i18n";
import {Button} from "@material-ui/core";

class FilterCitiesFrom extends Component {
    render()
    {
        return (
            <div>
                <FilterComponent />
                <Button>{i18n.t("Apply")}</Button>
                <Button>{i18n.t("Clear")}</Button>
            </div>
        );
    }
}

export default FilterCitiesFrom;