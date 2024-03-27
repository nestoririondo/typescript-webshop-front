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
  const [open, setOpen] = useState<boolean>(false);
  const [userMenu, setUserMenu] = useState<boolean>(false);

  const { basket } = useBasket();
  const { user } = useAuth();

  const totalItems = basket.reduce((acc: number, item: BasketProduct) => {
    return acc + item.quantity;
  }, 0);

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
          {user ? <p>Hello, {user.name}</p> : null}
          <IoPersonOutline
            className="user-icon"
            onClick={() => setUserMenu(!userMenu)}
          />
          {userMenu && !user ? <Login setUserMenu={setUserMenu} /> : null}
          {userMenu && user ? <Logout setUserMenu={setUserMenu} /> : null}

          <IoBagHandleOutline className="bag-icon" />
          <span className="cart-count">{totalItems}</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
