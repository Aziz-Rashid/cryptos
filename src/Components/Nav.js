import React, {Component} from 'react';
import './nav.css'
class Nav extends Component{
    render() {
        return (
            <div className="nav-main">
                <div>
                    <p className="nav-left">Welcome to <span>cryptos</span></p>
                </div>
                <div className="nav-right">
                    <a href="#"><p className="log">Login | Register</p></a>
                    <a href="#"><p >FAQ</p></a>
                    <p className="o">Muhammad Aziz</p>
                </div>
             </div>
        );
    }
}
export default Nav;