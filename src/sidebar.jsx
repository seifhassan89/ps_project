import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Sidebar extends Component {
    state = {}
    sidebar = () => {
        document.querySelector('.menu__toggler').addEventListener('click', () => {
            document.querySelector('.menu__toggler').classList.toggle('active');
            document.querySelector('.menu').classList.toggle('active');
        })
    };

    render() {
        // variable
        const c06 = {
            height: "610px"
        }
        // end variable

        return (
            <React.Fragment>
                <div className="menu" >
                    <p>COMPANY</p>
                    <p>PRODUCTS AND SERVICSE</p>
                    <p>PROJECTS</p>
                    <p>NEWS</p>
                    <p>CONTACT</p>

                </div>
                <div className="menu__toggler" onClick={this.sidebar}><span></span></div>
            </React.Fragment>
        );
    }
}

export default Sidebar;