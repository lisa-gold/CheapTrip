// This component shows additional information about a route after pressing expansion arrow
// (city of interchange, time of every trip between destinations)

import TravelInfo from "../components/CheapTripSearch/TravelInfo";

import React, {Component} from 'react';
import locations from "../cheapTripData/locations.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";

class TravelInfo extends Component {
    render()
    {
        return (
            <div>
                <span>{locations[route.from].name + ', ' + locations[route.from].country_name}</span>
                <ArrowForwardIcon/>
                <span>{locations[route.to].name + ', ' + locations[route.to].country_name}</span>
                <Typography style={style.time}>{this.timeTravel}</Typography>
                <Typography style={style.price}>{this.priceTravel}</Typography>

                <Button>Booking</Button>
                <Button>Buy ticket</Button>
                <Button>Hostel</Button>

            </div>
        );
    }
}

export default TravelInfo;