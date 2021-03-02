import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Catalog2 extends Component {
    state = {}
    render() {
        // variable
        const c06 = {
            height: "610px"
        }
        // end variable

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row 2-row" style={c06}>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                            <h4 className="cataloge-text">Projects</h4>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9">
                            <span className="eq-text">
                                We help solve problems on time and on a professional level
                            </span>
                            <span className="link-holder2">
                                <div className='container'>
                                    <ul className="no-list">
                                        <li>
                                            <a className='animated-arrow' href='https://google.com'>
                                                <span className='the-arrow -left'>
                                                    <span className='shaft'></span>
                                                </span>
                                                <span className='main'>
                                                    <span className='text'>
                                                        Go to projects
                                            </span>
                                                    <span className='the-arrow -right'>
                                                        <span className='shaft'></span>
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

export default Catalog2;