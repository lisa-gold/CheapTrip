// App start point

// It includes:
    // language change
    // theme provider
    // styles provider
    // header
    // AppRouter (switcher between different parts of the app)

import App from '../App';

import React, {Component} from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {AppRouter} from "../components";

class App extends Component {
    language;
    theme;
    styles;
    currency;
    render()
    {
        return (
            <div>
                <HeaderComponent/>
                <AppRouter/>
            </div>
        );
    }
}

export default App;
