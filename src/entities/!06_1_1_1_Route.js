// cheapTripData/routes.json
class Route {
    id;
    from; // start city id
    to; // finish city id
    price; //euro
    duration; //min
    direct_routes; // ids of other routes
    constructor(id, from, to, price, duration, direct_routes) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.price = price;
        this.duration = duration;
        this.direct_routes = direct_routes;
    }

}

// example
let route = {"80009":{
        "from":8,
        "to":9,
        "price":190,
        "duration":560,
        "direct_routes":"80380,130281"}};

class DirectRoute {
    id;
    from; // start city id
    to; // finish city id
    transport;
    price;
    duration;

    constructor(id, from, to, transport, price, duration) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.transport = transport;
        this.price = price;
        this.duration = duration;
    }

}
// example
let direct_route = {"80252": {
            "from":8,
            "to":9,
            "transport":1,
            "price":315,
            "duration":395}};



// =========================

// This component forms and displays travel information for one route
// It displays travel info, counts route time, price

import RouteCard from "../components/CheapTripSearch/RouteCard";

import React, {Component} from 'react';
import directRoutes from "../cheapTripData/direct_routes.json";
import locations from "../cheapTripData/locations.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import TravelInfo from "../components/CheapTripSearch/TravelInfo";
class RouteCard extends Component {
    timeTravel = `${Math.floor(route.duration / 60)}h ${route.duration % 60}m`;
    priceTravel = `€ ${route.price}`;
    key = Object.keys(route)[0];
    travelInfo = [{
        'route': this.key,
        ...directRoutes[this.key],
    }, {}]
    render()
    {
        return (
            <div>
                <span>{locations[route.from].name + ', ' + locations[route.from].country_name}</span>
                <ArrowForwardIcon/>
                <span>{locations[route.to].name + ', ' + locations[route.to].country_name}</span>
                <Typography style={style.time}>{this.timeTravel}</Typography>
                <Typography style={style.price}>{this.priceTravel}</Typography>

                {this.travelInfo.map(travelInfo => <TravelInfo travelInfo={travelInfo} key={travelInfo.to}/>
                )}
            </div>
        );
    }
}

export default RouteCard;