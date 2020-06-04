import React, { Component } from 'react'
import Looo from './logo2.png'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
               <div className="bgimg">
                   <div>
                       <img src={Looo} />
                       <h3>Morbi vel arcu gravida, iaculis lacus vel, posuere ipsum. Sed faucibus mauris vitae urna consectetur, sit amet maximus nisl sagittis. Ut in iaculis enim, et pulvinar mauris. Etiam tristique magna eget velit consectetur, a tincidunt velit dictum.</h3>
                   </div>
                   <div className="mid">
                        <div className="q">
                            <h1>Recent Post</h1>
                            <a href="#">Aliquam ac eleifend metus</a>
                            <p>March 10, 2018</p>
                        </div>
                        <div className="q">
                            <a href="#">Donec in libero sit amet mi vulputate</a>
                            <p>March 10, 2018</p>
                        </div>
                        <div className="q">
                            <a href="#">Aliquam ac eleifend metus</a>
                            <p>March 10, 2018</p>
                        </div>
                   </div>
                   <div>
                       <div className="baa"> 
                       <p>Quick Links</p>
                       <a href="#">Home</a>
                       <a href="#">About us</a>
                       <a href="#">Service</a>
                       <a href="#">Testimonials</a>
                       <a href="#">News</a>
                       <a href="#">Contact</a>
                       </div>
                       
                   </div>
                   <div className="bar">
                       <a className="y" href="#">Faq</a>
                       <a href="#">Term & Conditions</a>
                       <a href="#">Careers</a>
                       <a href="#">Newsletter</a>
                       <a href="#">Exchange</a>
                       </div>
                    
               </div>
        )
    }
}
