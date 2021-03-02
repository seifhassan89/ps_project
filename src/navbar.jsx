import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Navbar extends Component {
    state = {}
    showup = () =>{
        $(".hidee").fadeIn("slow");
        $(".flex").css({
            "top": "10px",
        });
    };
    scrolldown = () =>{
        console.log("scrolled down");
        if (window.scrollY >= 100) {
            console.log("scrolled downnnnnnnnnn");
            $('.hidee').fadeOut("slow");
            $(".flex").css({
                "top": "-85px",
                "opacity": "0"
            });
            $(".hideee").css({
                "display": "none",
                "opacity": "0"
            });
    } else {
        $('.hidee').fadeIn("slow");
        $(".flex").css({
            "top": "0px",
            "opacity": "1"
        });
        $(".hideee").css({
            "display": "block",
            "opacity": "1"
        });
    } 
};

    render() {
        // variable

        return (
            <React.Fragment>
                <div className="hidee" onClick={this.scrolldown}  >
                    <ul className="list-unstyled flex flex-row">
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">PRODUCTS AND SERVICSE</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;