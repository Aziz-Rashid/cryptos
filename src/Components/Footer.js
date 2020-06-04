import React, { Component } from 'react'
import Looo from './logo2.png'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
               <div className="bgimg">
                   <div>
                       <img src={Looo} alt="img"/>
                       <h3>Morbi vel arcu gravida, iaculis lacus vel, posuere ipsum. Sed faucibus mauris vitae urna consectetur, sit amet maximus nisl sagittis. Ut in iaculis enim, et pulvinar mauris. Etiam tristique magna eget velit consectetur, a tincidunt velit dictum.</h3>
                   </div>
                   <div className="mid">
                        <div className="q">
                            <h1>Recent Post</h1>
                            <a href="www.google.com">Aliquam ac eleifend metus</a>
                            <p>March 10, 2018</p>
                        </div>
                        <div className="q">
                            <a href="www.google.com">Donec in libero sit amet mi vulputate</a>
                            <p>March 10, 2018</p>
                        </div>
                        <div className="q">
                            <a href="www.google.com">Aliquam ac eleifend metus</a>
                            <p>March 10, 2018</p>
                        </div>
                   </div>
                   <div>
                       <div className="baa"> 
                       <p>Quick Links</p>
                       <a href="www.google.com">Home</a>
                       <a href="www.google.com">About us</a>
                       <a href="www.google.com">Service</a>
                       <a href="www.google.com">Testimonials</a>
                       <a href="www.google.com">News</a>
                       <a href="www.google.com">Contact</a>
                       </div>
                       
                   </div>
                   <div className="bar">
                       <a className="y" href="www.google.com">Faq</a>
                       <a href="www.google.com">Term & Conditions</a>
                       <a href="www.google.com">Careers</a>
                       <a href="www.google.com">Newsletter</a>
                       <a href="www.google.com">Exchange</a>
                       </div>
                    
               </div>
        )
    }
}
