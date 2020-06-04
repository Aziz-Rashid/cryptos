import React, { Component } from 'react'
import './sabs.css'
export default class Subs extends Component {
    render() {
        return (
            <div className="subs">
                <h2>Subscribe to <span>Newsletter</span></h2>
                <p>Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget nisl.</p>
                <input type="text" placeholder="Subscribe to NewsLetter" /><button>SUBSCRIBE</button>
            </div>
        )
    }
}
