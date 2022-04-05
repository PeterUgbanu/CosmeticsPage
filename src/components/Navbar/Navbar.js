import React, { useState } from "react";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BsCart4, BsPerson } from "react-icons/bs";
import "./Navbar.css";

const MenuList = ({ classes }) => {
  return (
    <ul className={classes}>
      <li>
        <a href="#home">home</a>
      </li>
      <li>
        <a href="#about">about us</a>
      </li>
      <li>
        <a href="#products">products</a>
      </li>
      <li>
        <a href="#faqs">faqs</a>
      </li>
      <li>
        <a href="#contact">contact us</a>
      </li>
    </ul>
  );
};

const Icons = () => {
  return (
    <>
      <div>
        <FiSearch size={20} />
      </div>
      <div className="badge-container">
        <BsCart4 size={20} />
        <div className="badge">
          <p>2</p>
        </div>
      </div>
      <div>
        <BsPerson size={20} />
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu5Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && <MenuList classes="mobile-menu " />}
        </div>
        <h3>Cosmetica</h3>
      </div>
      <div>
        <MenuList classes="menu" />
      </div>
      <div className="icons">
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
