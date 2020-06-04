import React, { Component } from 'react'
import './navv.css';
import Logo from './logo.png'
export default class Navv extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="menu">
                <a href="www.google.com">Home</a>
                <a href="www.google.com">Pages</a>
                <a href="www.google.com">Mega Menu</a>
                <a href="www.google.com">Currencies</a>
                <a href="www.google.com">Contact</a>
                </div>
                <div className="in">
                    <input type="text" placeholder="News Letter"/>
                    <button>Subscribe</button>
                </div>
            </div>
        )
    }
}
