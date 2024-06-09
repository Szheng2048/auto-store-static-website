import React, { Component } from 'react'
import carLogo from '../../assets/carLogo.jpg'
import "./Header.css"

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='navBar'>
          <div className="h1-logo">
              <h1>
                  Garzonio's Garage
              </h1>
          </div>
          <div className="right-side-nav">
              <ul>
                  <li>ANOTHER OBJ</li>
              </ul>
          </div>
        </nav>
        <div className="mainFrame">
          <img src={carLogo} alt="" />
        </div>
        <div className='navigation'>
          <div className="space"></div>
          <div><a href="tel:+9012479086">CONTACT US</a></div>
          <div className="space"></div>
          <div><a target='_blank' href="https://www.google.com/search?q=24+north+tiption+str+munford+tn&sca_esv=274f1da98f794c68&sxsrf=ADLYWIJkxNCprXitY5Ds03Avc74ImeEKCw%3A1716649703769&ei=5_5RZo_SLti-p84P0tujwAw&ved=0ahUKEwjP4a--iqmGAxVY38kDHdLtCMgQ4dUDCBA&uact=5&oq=24+north+tiption+str+munford+tn&gs_lp=Egxnd3Mtd2l6LXNlcnAiHzI0IG5vcnRoIHRpcHRpb24gc3RyIG11bmZvcmQgdG4yBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGAoYqwJI-CxQswVYjypwA3gAkAEAmAGUAqABkxKqAQUwLjkuNLgBA8gBAPgBAZgCEKAC0RLCAgsQABiwAxiiBBiJBcICCxAAGIAEGLADGKIEwgIFECEYnwXCAgUQIRirApgDAOIDBRIBMSBAiAYBkAYEkgcFMy45LjSgB-F8&sclient=gws-wiz-serp">HOW TO GET TO US</a></div>
          <div className="space"></div>
          <div>WESTERN TENNESSEE</div>
          <div className="space"></div>
        </div>
      </div>
    )
  }
}

export default Header