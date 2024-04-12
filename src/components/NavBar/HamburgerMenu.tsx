import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

type HamburgerMenuProps = {
  links: {
    name: string;
    path: string;
  }[];
  onClose: () => void;
  isHamburgerMenuOpen: boolean;
};

const HamburgerMenu = ({
  links,
  onClose,
  isHamburgerMenuOpen,
}: HamburgerMenuProps) => {
  return (
    <div
      className={`hamburger-wrapper ${isHamburgerMenuOpen ? "visible" : ""}`}
    >
      <div className={`hamburger-menu ${isHamburgerMenuOpen ? "active" : ""}`}>
        <div className="close-icon-wrapper" onClick={onClose}>
          <IoIosCloseCircleOutline className="close-icon" />
        </div>

        <div className="hamburger-links">
          {links.map((link) => (
            <Link
              onClick={onClose}
              className="nav-link"
              to={link.path}
              key={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`not-hamburger-menu ${isHamburgerMenuOpen ? "opaque" : ""}`}
        onClick={onClose}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
