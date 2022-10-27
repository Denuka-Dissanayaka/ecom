import React from 'react'

//-------------- icons ---------------
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';

import { Container } from './Style'

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="logo">
            <h3>Infinity style</h3>
        </div>
        <div className="menu-1">
            <ul>
                <li>Shop</li>
                <li>Lookbook</li>
                <li>Legal</li>
            </ul>
        </div>
        <div className="menu-2">
            <ul>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
            </ul>
        </div>
        <div className="newsletter">
            <p>Subscrible to the newsletter</p>
            <form>
                <input type="email"  placeholder='Your Email'/>
            </form>
        </div>
        <div className="social-media">
            <p>Social Media</p>
            <span><FaFacebookF/></span> <span><BsTwitter/></span> <span><AiOutlineInstagram/></span>
        </div>
      </div>
      <div className="line"></div>
      <div className="owner">
        <p>Infinity Design @ 2022 | Created By Denuka Dissanayaka</p>
      </div>
    </Container>
  )
}

export default Footer
