import { Link } from "react-router-dom";
import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import "../styles/navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav-wrapper">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <div className="logo">LOGO</div>
        <div className={open ? "nav-links active" : "nav-links"}>
          <ul>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </ul>
        </div>
        <div className="user-cart">
          <IoPersonOutline className="user-icon" />
          <IoBagHandleOutline className="bag-icon" />
          <span className="cart-count">0</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
