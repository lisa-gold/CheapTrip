// It is a part that pops after pressing on the burger
// It uses material-ui/core (Drawer, ListItem, List, ListItemText, CloseIcon)
// It has 3 list items (links to different pages): CheapTrip, TransferBuses, Contacts
// TransferBuses has MenuTrip

import Sidebar from "../components/HeaderComponent/Sidebar/Sidebar";

import React, {Component} from 'react';
import CloseIcon from "@material-ui/icons/Close";
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import {CONTACTS_ROUTE, MAIN_ROUTE} from "../utils/constants";
import i18n from "../i18n";
import MenuTrip from "../components/HeaderComponent/MenuTrip/MenuTrip";

class SideBar extends Component {
    closeHandler;
    render()
    {
        return (
            <div>
                <Drawer>
                <CloseIcon />
                    <List>
                        <ListItem button key={MAIN_ROUTE}>
                            <ListItemText
                                primary={i18n.t("CheapTrip")}
                                onClick={() => closeHandler(MAIN_ROUTE)}
                            />
                        </ListItem>
                        <MenuTrip />
                        <ListItem button key={CONTACTS_ROUTE}>
                            <ListItemText
                                primary={i18n.t("Contacts")}
                                onClick={() => closeHandler(CONTACTS_ROUTE)}
                            />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;
