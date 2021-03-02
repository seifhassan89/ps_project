import React, { Component, Fragment } from 'react';


import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/main.css';
import './js/main';

import Footer from './footer';
import Slider from './slider';
import Catalog2 from './cataloge2';
import Catalog1 from './cataloge2';
import Imgs from './imgs';
import Industries from './industries';
import Firstsection from './friestsection';
import Preload from './preloader';
import Sidebar from './sidebar';
import Navbar from './navbar';





// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Sidebar/>
                <Preload/>
                <Firstsection/>
                <Industries />
                <Catalog1/>
                <Imgs />
                <Catalog2 />
                <Slider />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;