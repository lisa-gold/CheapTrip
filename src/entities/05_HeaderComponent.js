// Header on the pages
// It consists of logo, slogan, navigation and sidebar
// It uses AppBar, Toolbar from material-ui/core

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { AppBar, Toolbar } from "@material-ui/core";

import React, {Component} from 'react';
import {LogoHeader} from "../components/HeaderComponent/Logos/Logos";
import Nav from "../components/HeaderComponent/Nav/Nav";
import Sidebar from "../components/HeaderComponent/Sidebar/Sidebar";

class Header extends Component {
    page_mode;
    render()
    {
        return (
            <div>
                <AppBar >
                    <Toolbar >
                        <LogoHeader page_mode={page_mode} />
                        <Nav />
                    </Toolbar>
                    <Sidebar page_mode={page_mode} />
                </AppBar>
            </div>
        );
    }
}

export default Header;
