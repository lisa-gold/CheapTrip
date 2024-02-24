// Block with info about CEO and ways to contact him

import { Contacts } from "../pages";

import React, {Component} from 'react';

class Contacts extends Component {
    infoRoman = {name: '',
    phone: ''}
    render()
    {
        return (
            <div>
                {this.infoRoman}
            </div>
        );
    }
}

export default Contacts;