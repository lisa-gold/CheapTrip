// It is form where users choose 2 cities, click 'let's go' or 'cancel' and routes are displayed

// It forms 2 lists of cities to choose from (drop-list). It uses locations.json to build these cities lists
// It builds routes using flying_routes, fixed_routes, common_routes (fake db for development phase ??)

// ? forming lists and forming routes should be separated into different components

import CheapTripSearch from "../components/CheapTripSearch/CheapTripSearch";

import {example, example2} from "./06_1_1c_Locations";
import {Autocomplete, TextField} from "@mui/material";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import classes from "../components/SearchCheapTrip/SearchComponent.module.css";
import {Button} from "@material-ui/core";
import i18n from "../i18n";
import RouteCard from "../components/CheapTripSearch/RouteCard";

class Search {
    routes = {example, example2}; // dictionary with all cities from db, where key is a unique number
    from = this.routes[Object.keys(example)[0]];  // city from which routes are build
    to = this.routes[Object.keys(example2)[0]]; // city to which routes are build
    selectedRoutes = []; // routes between cities chosen

    cleanForm = () => {
        this.from = {};
        this.to = {};
    } // clear from and to cities
    submit = () => {
        this.selectedRoutes = this.routes.filter().sort();
    } // build routes between chosen cities and sort them

    render() {
        return <div>
            <form action="#">
                <Autocomplete
                    renderInput={(params) => <TextField {...params} label="From"/>}
                    options={}/>
                <DoubleArrowIcon className={classes.media_icon}/>
                <Autocomplete
                    renderInput={(params) => <TextField {...params} label="to"/>}
                    options={}/>
            </form>

            <div>
                <Button onClick={this.cleanForm}>
                    {i18n.t("Clean")}
                </Button>
                <Button onClick={this.submit}>
                    {i18n.t("Let's Go")}
                </Button>
            </div>

            <div>
                {this.selectedRoutes.map((route, index) => {
                return <RouteCard route={route} key={key + index}/>})
                }
            </div>
        </div>
    }
}
