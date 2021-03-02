import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Firstsection extends Component {
    state = {}
    render() {
        // variable
        // end variable

        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2>We make equipment <br /> for various industrial <br /> sectors
                    </h2>
                        </div>
                        <div class="col-lg-6 text-center">
                            <div class="arrow">
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>
                        </div>
                    </div>
                </div>
                <hr class="hr-no-margin"/>

            </React.Fragment>
        );
    }
}

export default Firstsection;