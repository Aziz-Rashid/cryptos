import React, { Component } from 'react'
import './navv.css';
import Logo from './logo.png'
export default class Navv extends Component {
    render() {
        return (
            <div className="nav">
                <div class="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="menu">
                <a href="#">Home</a>
                <a href="#">Pages</a>
                <a href="#">Mega Menu</a>
                <a href="#">Currencies</a>
                <a href="#">Contact</a>
                </div>
                <div className="in">
                    <input type="text" placeholder="News Letter"/>
                    <button>Subscribe</button>
                </div>
            </div>
        )
    }
}
