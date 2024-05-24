import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./navbar.css";
import logo from "../../assets/name-logo.svg";
import underLineIcon from "../../assets/nav_underline.svg";
import hamburgerIcon from "../../assets/menu_open.svg";
import closeIcon from "../../assets/menu_close.svg";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt={"Portfolio Logo"} />
      <img
        src={hamburgerIcon}
        onClick={openMenu}
        alt="hamburger icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={closeIcon}
          onClick={closeMenu}
          alt="close icon"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="achor-link" href="#home">
            <p onClick={() => setMenu("home")}> Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underLineIcon} alt="under line icon" />}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}> About Me</p>
          </AnchorLink>
          {menu === "about" && (
            <img src={underLineIcon} alt="under line icon" />
          )}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}> Services</p>
          </AnchorLink>
          {menu === "services" && (
            <img src={underLineIcon} alt="under line icon" />
          )}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio </p>
          </AnchorLink>
          {menu === "work" && <img src={underLineIcon} alt="under line icon" />}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}> Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={underLineIcon} alt="under line icon" />
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="achor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};
