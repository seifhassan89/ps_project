import React, { Component } from 'react';

import './css/main.css';
// import '../js/main';


import 'bootstrap/dist/css/bootstrap.min.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
// import './path/to/css/font-awesome.min.css'


import img9 from './img/oilandgas.webp'
import img10 from './img/africalutre.jpg'
import img11 from './img/meta.jpeg'
import img12 from './img/chimical.jpg'
import img13 from './img/energatics.jpg'
import img14 from './img/food.jpg'


class Industries extends Component {
    state = {}
    // function

    Hover01 = () => {
        document.getElementById('seif').classList.add("pic1");
        document.getElementById('seif').style.backgroundImage = `url(${img9})`;
        document.getElementById('text1').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover01 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic1");
        document.getElementById('text1').classList.remove("textt");
    };
    Hover02 = () => {
        document.getElementById('seif').classList.add("pic2");
        document.getElementById('seif').style.backgroundImage = `url(${img10})`;
        document.getElementById('text2').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover02 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic2");
        document.getElementById('text2').classList.remove("textt");
    };
    Hover03 = () => {
        document.getElementById('seif').classList.add("pic3");
        document.getElementById('seif').style.backgroundImage = `url(${img11})`;
        document.getElementById('text3').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover03 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic3");
        document.getElementById('text3').classList.remove("textt");
    };
    Hover04 = () => {
        document.getElementById('seif').classList.add("pic4");
        document.getElementById('seif').style.backgroundImage = `url(${img12})`;
        document.getElementById('text4').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover04 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic4");
        document.getElementById('text4').classList.remove("textt");
    };
    Hover05 = () => {
        document.getElementById('seif').classList.add("pic5");
        document.getElementById('seif').style.backgroundImage = `url(${img13})`;
        document.getElementById('text5').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover05 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic5");
        document.getElementById('text5').classList.remove("textt");
    };
    Hover06 = () => {
        document.getElementById('seif').classList.add("pic6");
        document.getElementById('seif').style.backgroundImage = `url(${img14})`;
        document.getElementById('text6').classList.add("textt");
        document.getElementById('overlay').style.display = "block";
        
    };
    NotHover06 = () => {
        document.getElementById('seif').style.backgroundImage = ``;
        document.getElementById('seif').classList.remove("pic6");
        document.getElementById('text6').classList.remove("textt");
    };

    // end function
    render() {

        // variabels
        const c09 = {
            marginLeft: "50px"
        }
        // end variabels
        return (
            <React.Fragment>
                <div className="containerr">
                    <div className="overlay" id="overlay"></div>
                    <div className="row kalam" id="seif">
                        <div className="col-lg-3 col-md-3 col-sm-3 borderr kalam">
                            <span className="num">6</span>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 kalam">
                            <div className="pic-text flexx">
                                <h4>
                                    industries
                                </h4>
                                <span className="link-holder" id="a11" style={c09}>
                                    <a className="a1" id="a1" href="#" onMouseOver={this.Hover01} onMouseLeave={this.NotHover01}><span id="text1"> Oil and gas industry</span>
                                    </a> —
                            <a className="a2" id="a2" href="#" onMouseOver={this.Hover02} onMouseLeave={this.NotHover02}><span id="text2">Agriculture</span>
                                    </a> —
                            <a className="a3" id="a3" href="#" onMouseOver={this.Hover03} onMouseLeave={this.NotHover03}><span id="text3">Metallurgy</span>
                                    </a> —
                            <a className="a4" id="a4" href="#" onMouseOver={this.Hover04} onMouseLeave={this.NotHover04}><span id="text4">Chemical industry</span>
                                    </a> —
                            <a className="a5" id="a5" href="#" onMouseOver={this.Hover05} onMouseLeave={this.NotHover05}><span id="text5">Energetics</span>
                                    </a> —
                            <a className="a6" id="a6" href="#" onMouseOver={this.Hover06} onMouseLeave={this.NotHover06}><span id="text6">Food industry</span>
                                    </a>
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
                                                            about company
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
                </div>
            </React.Fragment>
        );
    }
}

export default Industries;