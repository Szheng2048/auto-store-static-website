import React, { Component } from 'react'
import Header from '../common/Header.jsx'
import "./Contact.css"
import emailLogo from '../../assets/emailLogo.png'
import faxLogo from '../../assets/faxLogo.jpg'
import locationLogo from '../../assets/locationLogo.jpg'
import phoneLogo from '../../assets/phoneLogo.jpg'
export class Contact extends Component {
  render() {
    return (
      <div className='contactPage'>
        <Header/>
        <div className="splitScreens">
            <div className="contactDiv">
                <img src={locationLogo} alt="" className="logos" />
                <div className="contactDescription">Our Location</div>
                <div>247 N Tipton St. Brighton, TN 38931</div>
            </div>
            <div className="contactDiv">
                <img src={phoneLogo} alt="" className="logos" />
                <div className="contactDescription">Phone Number</div>
                <div>923-293-4729</div>
            </div>
            <div className="contactDiv">
                <img src={faxLogo} alt="" className="logos" />
                <div className="contactDescription">Fax</div>
                <div>1-782-273-2382</div>
            </div>
            <div className="contactDiv">
                <img src={emailLogo} alt="" className="logos" />
                <div className="contactDescription">Email</div>
                <div>email@gmail.com</div>
            </div>
            <div className="mailjetContact"></div>
        </div>
      </div>
    )
  }
}

export default Contact