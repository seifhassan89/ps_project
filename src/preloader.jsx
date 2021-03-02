import React, { Component } from 'react';
import './css/main.css';
import { $ } from 'react-jquery-plugin';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './path/to/css/font-awesome.min.css'

class Preload extends Component {
    state = {}
     counter= ()=> {
         console.log("preload");
        var count = setInterval(function () {
            var c = parseInt($('.counter').text());
            $('.counter').text((++c).toString());
            if (c === 100) {
                clearInterval(count);
                $('.counter').addClass('hide');
                $('.preloader').addClass('active');
            }
        }, 30);
    };

    render() {
        // variable
        const c06 = {
            height: "610px"
        }
        // end variable

        return (
            <React.Fragment>
                <div className="preloader" onLoad={this.counter()}>
        <div className="counter">0</div>
    </div>
            </React.Fragment>
        );
    }
}

export default Preload;