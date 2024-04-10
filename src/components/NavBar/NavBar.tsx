import { Link } from "react-router-dom";
import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useBasket, BasketItem } from "../../context/useBasket";
import { useAuth } from "../../context/useAuth";
import logo from "../../../public/logo2.png";
import "../../styles/navbar.css";
import Login from "./Login";
import Logout from "./Logout";
import NavBarLinks from "./NavBarLinks";
import BasketSideMenu from "./BasketSideMenu";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

  const { basket } = useBasket();
  const { user } = useAuth();

  const totalItems = basket.reduce((acc: number, item: BasketItem) => {
    return acc + item.quantity;
  }, 0);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="nav-wrapper">
        <div
          className="hamburger"
          onClick={() => {
            setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
            console.log(isHamburgerMenuOpen);
          }}
        >
          ☰
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <NavBarLinks
          links={links}
          setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        />
        <HamburgerMenu
          links={links}
          onClose={() => setIsHamburgerMenuOpen(false)}
          isHamburgerMenuOpen={isHamburgerMenuOpen}
        />

        <div className="user-cart">
          {user ? <p>Hello, {user.name}</p> : null}
          <IoIosSearch className="user-icon" />
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
          <div className="bag" onClick={() => setIsBasketOpen(!isBasketOpen)}>
            <IoBagHandleOutline className="bag-icon" />
            <span className="cart-count">{totalItems}</span>
          </div>
        </div>

        <BasketSideMenu
          onClose={() => setIsBasketOpen(false)}
          isBasketOpen={isBasketOpen}
        />
      </nav>
    </motion.header>
  );
};

export default NavBar;
