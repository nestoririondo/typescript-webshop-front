import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useBasket, BasketItem } from "../../context/useBasket";
import { useAuth } from "../../context/useAuth";
import { motion } from "framer-motion";
import logo from "../../../public/logo2.png";
import Login from "./Login";
import Logout from "./Logout";
import NavBarLinks from "./NavBarLinks";
import BasketSideMenu from "./BasketSideMenu";
import HamburgerMenu from "./HamburgerMenu";
import UserMenu from "./UserMenu";
import Modal from "../Modal";
import "../../styles/navbar.css";

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const userMenuIcon = useRef<HTMLDivElement>(null);

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

  const handleUserMenuClick = () => {
    user && setIsUserMenuOpen((prev) => !prev);
    !user && setIsModalOpen(!isModalOpen);
  };

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
          <img src={logo} alt="xBtnc logo" />
          <p>xBtnc</p>
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

          <div ref={userMenuIcon} onClick={handleUserMenuClick}>
            <IoPersonOutline className="user-icon" />
          </div>

          <UserMenu
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
            userMenuIconDiv={userMenuIcon}
          />

          <Modal
            onClose={() => setIsModalOpen(false)}
            isModalOpen={isModalOpen}
          >
            <Login onLogin={() => setIsModalOpen(false)} />
          </Modal>

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
