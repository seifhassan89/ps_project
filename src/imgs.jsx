import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';


import img3 from './img/product-1.9eee51d3.jpg'
import img4 from './img/product-2.8fd071c4.jpg'
import img5 from './img/product-3.a8286170.jpg'
import img6 from './img/product-4.1bd78439.jpg'
import img7 from './img/product-5.9ff8ea05.jpg'
import img8 from './img/product-6.8d46930b.jpg'
// import './path/to/css/font-awesome.min.css'

class Imgs extends Component {
    state = {}
    picin01 = () => {
        document.getElementById('one').classList.add("show1");
        document.getElementById('one').style.backgroundImage = `url(${img3})`;
        document.getElementById('text11').classList.add("textt");
    };
    picout01 = () => {
        document.getElementById('one').style.backgroundImage = ``;
        document.getElementById('one').classList.remove("show1");
        document.getElementById('text11').classList.remove("textt");
    };
    picin02 = () => {
        console.log("Sssssssssssss");
        document.getElementById('two').classList.add("show2");
        document.getElementById('two').style.backgroundImage = `url(${img4})`;
        document.getElementById('text22').classList.add("textt");
    };
    picout02 = () => {
        document.getElementById('two').classList.remove("show2");
        document.getElementById('two').style.backgroundImage = ``;
        document.getElementById('text22').classList.remove("textt");
    };
    picin03 = () => {
        document.getElementById('three').classList.add("show3");
        document.getElementById('three').style.backgroundImage = `url(${img5})`;
        document.getElementById('text33').classList.add("textt");
    };
    picout03 = () => {
        document.getElementById('three').classList.remove("show3");
        document.getElementById('three').style.backgroundImage = ``;
        document.getElementById('text33').classList.remove("textt");
    };
    picin04 = () => {
        document.getElementById('four').classList.add("show4");
        document.getElementById('four').style.backgroundImage = `url(${img6})`;
        document.getElementById('text44').classList.add("textt");
    };
    picout04 = () => {
        document.getElementById('four').classList.remove("show4");
        document.getElementById('four').style.backgroundImage = ``;
        document.getElementById('text44').classList.remove("textt");
    };
    picin05 = () => {
        document.getElementById('five').classList.add("show5");
        document.getElementById('five').style.backgroundImage = `url(${img7})`;
        document.getElementById('text55').classList.add("textt");
    };
    picout05 = () => {
        document.getElementById('five').classList.remove("show5");
        document.getElementById('five').style.backgroundImage = ``;
        document.getElementById('text55').classList.remove("textt");
    };
    picin06 = () => {
        document.getElementById('six').classList.add("show6");
        document.getElementById('six').style.backgroundImage = `url(${img8})`;
        document.getElementById('text66').classList.add("textt");
    };
    picout06 = () => {
        document.getElementById('six').classList.remove("show6");
        document.getElementById('six').style.backgroundImage = ``;
        document.getElementById('text66').classList.remove("textt");
    };
    
    render() {
        // variable
        const c07 = {
            zIindex: "-99999",
        };

        // end variable

        return (
            <React.Fragment>
                <div className="containerr">
                    <div className="grid-container">
                        <div className="one" id="one" onMouseOver={this.picin01} onMouseLeave={this.picout01}><span id="text11">capacities and tanks</span></div>
                        <div className="two" id="two"><span id="text22"onMouseOver={this.picin02} onMouseLeave={this.picout02}>capacitive apparatus and vessels</span></div>
                        <div className="three" id="three"><span id="text33"onMouseOver={this.picin03} onMouseLeave={this.picout03}>seperation equipmeint and sedmientation tanks</span></div>
                        <div className="four" id="four"><span id="text44"onMouseOver={this.picin04} onMouseLeave={this.picout04}>heat exchargers</span></div>
                        <div className="five" id="five"><span id="text55"onMouseOver={this.picin05} onMouseLeave={this.picout05}>gas and air receivers</span></div>
                        <div className="six" id="six"><span id="text66"onMouseOver={this.picin06} onMouseLeave={this.picout06}>tanks vertical RVS</span></div>
                    </div>
                </div>
                <hr className="hr-no-margin" style={c07} />
            </React.Fragment>
        );
    }
}

export default Imgs;