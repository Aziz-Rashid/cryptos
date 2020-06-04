import React, { Component } from 'react'
import './body.css'
import Pic from './bg-2.png'
export default class Body extends Component {
    constructor(){
        super();

    }
    render() {

        return (
            <div className="co">
                <div className="bodytxt">
                    <h4>Take a step into the <span>crypto world</span></h4>
                    <h6>Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar</h6>
                    <button>Read More</button>
                </div>
                <div className="body-pic">
                     <img onClick={this.handler} src={Pic} alt="coint pics"/>
                </div>
            </div>
        )
    }
}
