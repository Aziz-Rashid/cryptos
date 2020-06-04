import React, { Component } from 'react'
import './coin.css'
import Lo from './about.png';
export default class Coin extends Component {
    render() {
        return (
            <div className="im">
                <div className="coi">
                <img src={Lo} alt="img"/>
                </div>
                <div className="jk">
                <h3>Let’s change <br /><span>the world</span> together</h3>
                            <h5>Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget nisl.</h5>
                            <p>Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget nisl. Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi.</p>
                            <button>Read More</button>
                </div>
            </div>
        )
    }
}
