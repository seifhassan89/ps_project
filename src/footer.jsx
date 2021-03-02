import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Footer extends Component {
    state = {}
    // functions

    innotout = () => {
        console.log("footer is ready");
        document.getElementById('footer').classList.add("footer2");
        document.getElementById('addwhite1').classList.remove("white2");
        document.getElementById('addwhite1').classList.add("white");

        document.getElementById('addwhite2').classList.remove("white2");
        document.getElementById('addwhite2').classList.add("white");

        document.getElementById('addwhite3').classList.remove("white2");
        document.getElementById('addwhite3').classList.add("white");

        document.getElementById('addwhite4').classList.add("white");
        document.getElementById('addwhite4').classList.remove("white2");

        document.getElementById('addwhite5').classList.add("white");
        document.getElementById('addwhite5').classList.remove("white2");

        document.getElementById('addwhite6').classList.add("white");
        document.getElementById('addwhite6').classList.remove("white2");

        document.getElementById('addwhite7').classList.add("white");
        document.getElementById('addwhite7').classList.remove("white2");

        document.getElementById('addwhite8').classList.remove("white2");
        document.getElementById('addwhite8').classList.add("white");

        document.getElementById('addwhite9').classList.remove("white2");
        document.getElementById('addwhite9').classList.add("white");

    };
    outnotin = () => {
        console.log("footer is out");
        document.getElementById('footer').classList.remove("footer2");
        document.getElementById('addwhite1').classList.remove("white");
        document.getElementById('addwhite1').classList.add("white2");

        document.getElementById('addwhite2').classList.remove("white");
        document.getElementById('addwhite2').classList.add("white2");

        document.getElementById('addwhite3').classList.remove("white");
        document.getElementById('addwhite3').classList.add("white2");

        document.getElementById('addwhite4').classList.remove("white");
        document.getElementById('addwhite4').classList.add("white2");

        document.getElementById('addwhite5').classList.remove("white");
        document.getElementById('addwhite5').classList.add("white2");

        document.getElementById('addwhite6').classList.remove("white");
        document.getElementById('addwhite6').classList.add("white2");

        document.getElementById('addwhite7').classList.remove("white");
        document.getElementById('addwhite7').classList.add("white2");

        document.getElementById('addwhite8').classList.remove("white");
        document.getElementById('addwhite8').classList.add("white2");

        document.getElementById('addwhite9').classList.remove("white");
        document.getElementById('addwhite9').classList.add("white2");

    };


    // end the functions
    render() {
        // variable
        const c01 = {
            height: "100px",
            lineHieght: "1",
            fontSize: "27px",
        };
        const c02 = {
            fontSize: "25px",
        };
        const c03 = {
            fontSize: "25px",
            marginBottom: "100px"
        };
        const c04 = {
            left: "219px",
            top: "-23px"
        };
        const c05 = {
            display: "inline-block",
            fontSize: "25px",
            cursor: "pointer"
        };
        const iconfont = {
            marginTop: "5px",
            marginLeft: "8px",
            fontSize: "52px",
            color: "white"
        };

        // end variable

        return (
            <React.Fragment>
                <footer id="footer" onMouseOver={this.innotout} onMouseLeave={this.outnotin}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="st1">
                                    <p id="addwhite1" style={c02}>Leave a request and managers will contact you <br />at a convenient time</p>
                                </div>
                                <hr id="addwhite8" />
                                <div className="st2" id="st2">
                                    <div className="row">
                                        <div className="col-6">
                                            <p id="addwhite2" style={c03}>Leave a request</p>
                                        </div>
                                        <div className="col-6">
                                            <div className="center-con" style={c04}>
                                                <div className="round">
                                                    <div>
                                                    <div class="arroww"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p id="addwhite3" style={c02}>
                                        Penza, st. Austrina, building 63, building 7 <br /><br /> 8 (8412) 45-89-99<br /> 8 (8412) 45-89-79<br /> 8 (499) 348-20-55<br /><br /> om@penzgidromash.ru
                                    </p>
                                </div>
                                <hr id="addwhite9" />
                                <div className="st3">
                                    <p id="addwhite4" style={c05}>All
                                contacts</p>
                                    <div className="center-con">
                                        <div className="round">
                                            <div>
                                            <div class="arroww"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 spiecal" id="addwhite5">
                                Cont<br />act<br />us
                    </div>
                        </div>
                        <hr id="addwhite7" />
                        <div className="st4" style={c01}>
                            <div className="row" id="addwhite6">
                                <div className="col-10"> © 2019 LLC PenzHydromash</div>
                                <div className="col-2"> Design by Seif Hassan</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;