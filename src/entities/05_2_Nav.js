// This is a burger on the right corner of the header
// It uses IconButton, MenuIcon from "@material-ui/core";

import Nav from "../components/HeaderComponent/Nav/Nav";


import React, {Component} from 'react';
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Nav extends Component {
    render()
    {
        return (
            <div>
                <nav >
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                </nav>
            </div>
        );
    }
}

export default Nav;
