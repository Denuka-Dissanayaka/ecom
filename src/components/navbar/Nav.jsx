import React, { useContext, useState } from "react";
import { Container } from "./Style";

// --------------- Import Icons ------------------
import { FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiUser } from "react-icons/bi";

// ---------------- Import UseContext ------------------
import { UserContext } from "../../App";

const Nav = () => {
  const [classActive, setClassActive] = useState(false)
  const {setMarginFunc} = useContext(UserContext)

  // ------------- change navbar stylies when scrolling --------------
  const changeNavbar = () => {
    if(window.scrollY !== 0) {
      setClassActive(true)
    } else {
      setClassActive(false)
    }
  }

  window.addEventListener('scroll', changeNavbar)

  // ------------------ handle mobile menu button -------------
  const handleMenu = () => {
    setMarginFunc("0px");
  };

  return (
      
      <Container className={classActive ? 'active' : ''}>
        <div className="nav-container">
          <div className="mobile-menu" onClick={handleMenu}>
            <HiOutlineMenuAlt2 />
          </div>
          <ul className="menu-one responsive">
            <li>Home</li>
            <li>
              <span> Pages <FaAngleDown /> </span>
            </li>
            <li>
              <span> Categories <FaAngleDown /> </span>
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="logo">
            <span>Infinity style</span>{" "}
          </div>
          <ul className="menu-one menu-two">
            <li className="desktop-icon">Shops</li>
            <li className="desktop-icon">Account</li>
            <li className="mobile-icon">
              <BiUser />
            </li>
            <li>
              <BiSearch />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
      </Container>
    
  );
};

export default Nav;
