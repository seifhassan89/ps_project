import React, { Component } from 'react';

import './css/main.css';
// import '../js/main';
import img1 from './img/1.89833567.jpg'
import img2 from './img/2.76edbeaf.jpg'



import 'bootstrap/dist/css/bootstrap.min.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
// import './path/to/css/font-awesome.min.css'

class Slider extends Component {
    state = {}
    // variable
    Sliderr = () => {
        document.addEventListener('DOMContentLoaded', function () {
            var parent = document.querySelector('.splitview'),
                topPanel = parent.querySelector('.top'),
                handle = parent.querySelector('.handle'),
                skewHack = 0,
                delta = 0;

            // If the parent has .skewed class, set the skewHack var.
            if (parent.className.indexOf('skewed') != -1) {
                skewHack = 1000;
            }

            parent.addEventListener('mousemove', function (event) {
                // Get the delta between the mouse position and center point.
                delta = (event.clientX - window.innerWidth / 2) * 0.5;

                // Move the handle.
                handle.style.left = event.clientX + delta + 'px';

                // Adjust the top panel width.
                topPanel.style.width = event.clientX + skewHack + delta + 'px';
            });
        });
    };

    // end variable
    render() {
        

        return (
            <React.Fragment>
                <div onLoad={this.Sliderr()} className="splitview skewed">
                    <div className="panel bottom">
                        <div className="content">
                            <div className="description">
                                <h1>vankovsky field</h1>
                                <p>PJSC NK Rosneft <br /> 2019</p>
                            </div>
                            <img src={img1} alt="Original" />
                        </div>
                    </div>

                    <div className="panel top">
                        <div className="content">
                            <div className="description">
                                <h1>ZTO Neftestroy, <br /> Saratov</h1>
                                <p>ZTO Neftestroy <br /> 2019</p>
                            </div>
                            <img src={img2} alt="Duotone" />
                        </div>
                    </div>
                    <div className="handle"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Slider;