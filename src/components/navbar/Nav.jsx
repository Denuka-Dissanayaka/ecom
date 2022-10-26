import React from 'react'
import {Container} from './Style'

import {FaAngleDown} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {BiUser} from 'react-icons/bi'

const Nav = () => {
  return (
    <Container>
      <div className="nav-container">
        <div className="mobile-menu"><HiOutlineMenuAlt2/></div>
        <ul className="menu-one responsive">
            <li>Home</li>
            <li>Pages <FaAngleDown/></li>
            <li>Categories <FaAngleDown/></li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className="logo"><span>Infinity style</span> </div>
        <ul className="menu-one menu-two">
            <li className='desktop-icon'>Shops</li>
            <li className='desktop-icon'>Account</li>
            <li className='mobile-icon'><BiUser/></li>
            <li><BiSearch/></li>
            <li><AiOutlineShoppingCart/></li>
        </ul>
      </div>
    </Container>
  )
}

export default Nav
