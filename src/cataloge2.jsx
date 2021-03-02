import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Catalog1 extends Component {
    state = {}
    render() {
        // variable
        const c08 = {
            height: "610px"
        }
        // end variable

        return (
            <React.Fragment>
                <div class="container">
                    <div class="row 2-row" style={c08}>
                        <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                            <h4 class="cataloge-text">catalog</h4>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <span class="eq-text">
                                Equipment and services
                        for solving <br /> production problems
                    </span>
                            <span class="link-holder2">
                                <div class='container'>
                                    <ul class="no-list">
                                        <li>
                                            <a class='animated-arrow' href='https://google.com'>
                                                <span class='the-arrow -left'>
                                                    <span class='shaft'></span>
                                                </span>
                                                <span class='main'>
                                                    <span class='text'>
                                                        Go to catalog
                                            </span>
                                                    <span class='the-arrow -right'>
                                                        <span class='shaft'></span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Catalog1;