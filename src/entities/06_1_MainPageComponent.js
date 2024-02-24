// It is the main part of the app: it takes cities and displays routes
// It includes description, search form, big CheapTrip logo

import {MainPageComponent} from "../components/MainPageComponent/MainPageComponent";

import CheapTripSearch from "../components/CheapTripSearch/CheapTripSearch";
import Logo_Cht from "../components/MainPageComponent/Logo_ChT_2.png"; // should be in assets

class Home {
    description = 'Find most beneficial and unusual routes between cities, combining flight, train, bus, ferry and rideshare.';
    formAndResult = CheapTripSearch; // should be divided into 2 components (form for searching and resulting component with routes found)
    bigLogo = Logo_Cht;

    render() {
        return <div>
            {this.description}
            {this.formAndResult}
            {this.bigLogo}
        </div>
    }
}
