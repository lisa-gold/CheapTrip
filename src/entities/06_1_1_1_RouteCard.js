// This component forms and displays travel information for one route
// It displays travel info, counts route time, price

import RouteCard from "../components/CheapTripSearch/RouteCard";

import React, {Component} from 'react';
import directRoutes from "../cheapTripData/direct_routes.json";
import locations from "../cheapTripData/locations.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import TravelInfo from "../components/CheapTripSearch/TravelInfo";

// route is given on a higher level
let route = {"80009":{"from":8,"to":9,"price":190,"duration":560,"direct_routes":"80380,130281"}};

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