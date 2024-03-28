import { Link } from "react-router-dom";
import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useBasket, BasketProduct } from "../context/useBasket";
import { useAuth } from "../context/useAuth";
import "../styles/navbar.css";
import Login from "./Login";
import Logout from "./Logout";

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  const { basket } = useBasket();
  const { user } = useAuth();

  const totalItems = basket.reduce((acc: number, item: BasketProduct) => {
    return acc + item.quantity;
  }, 0);

  return (
    <header>
      <nav className="nav-wrapper">
        <div
          className="hamburger"
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          ☰
        </div>
        <div className="logo">LOGO</div>
        <div className={isHamburgerMenuOpen ? "nav-links active" : "nav-links"}>
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
          {user ? <p>Hello, {user.name}</p> : null}
          <IoPersonOutline
            className="user-icon"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          />
          {isUserMenuOpen && !user ? (
            <Login onLogin={() => setIsUserMenuOpen(false)} />
          ) : null}
          {isUserMenuOpen && user ? (
            <Logout onLogout={() => setIsUserMenuOpen(false)} />
          ) : null}

          <IoBagHandleOutline className="bag-icon" />
          <span className="cart-count">{totalItems}</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
