// It is a list (constant) that has 7 routes (4 of them are realised)
// It imports routes from "../utils/constants" ('/', 'contacts', etc.) and
// it imports components (page parts) and
// it makes an object where corresponding fields are connected together (route and corresponding component)

import publicRoutes from '../../routes/publicRoutes';
import {MAIN_ROUTE} from "../utils/constants";
import {MainPageComponent} from "../components/MainPageComponent/MainPageComponent";

let example =  {
    path: MAIN_ROUTE,
    Component: MainPageComponent,
};
