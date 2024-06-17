import { useState } from 'react'
import Header from '../common/Header.jsx'
import "./Contact.css"
import emailLogo from '../../assets/emailLogo.png'
import faxLogo from '../../assets/faxLogo.jpg'
import locationLogo from '../../assets/locationLogo.jpg'
import phoneLogo from '../../assets/phoneLogo.jpg'
import React from 'react'

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
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
            <div className="mailjetContact">
                <h2>Contact Us</h2>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
                    <input type="text" name="email" id="email" placeholder='Please Enter Valid Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea name="message" id="message" rows="4" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
      </div>
  )
}



// export class Contact extends Component {
//   render() {
//     const [name, setName] = useState("")
//     return (
//       <div className='contactPage'>
//         <Header/>
//         <div className="splitScreens">
//             <div className="contactDiv">
//                 <img src={locationLogo} alt="" className="logos" />
//                 <div className="contactDescription">Our Location</div>
//                 <div>247 N Tipton St. Brighton, TN 38931</div>
//             </div>
//             <div className="contactDiv">
//                 <img src={phoneLogo} alt="" className="logos" />
//                 <div className="contactDescription">Phone Number</div>
//                 <div>923-293-4729</div>
//             </div>
//             <div className="contactDiv">
//                 <img src={faxLogo} alt="" className="logos" />
//                 <div className="contactDescription">Fax</div>
//                 <div>1-782-273-2382</div>
//             </div>
//             <div className="contactDiv">
//                 <img src={emailLogo} alt="" className="logos" />
//                 <div className="contactDescription">Email</div>
//                 <div>email@gmail.com</div>
//             </div>
//             <div className="mailjetContact">
//                 <h2>Contact Us</h2>
//                 <form>
//                     <input type="text" name="name" id="name" placeholder='Enter Your Name' />
//                     <input type="text" name="email" id="email" placeholder='Please Enter Valid Email'/>
//                     <textarea name="message" id="message" cols="20" rows="4"></textarea>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Contact