import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

type NavBarLinksProps = {
  links: {
    name: string;
    path: string;
  }[];
  setIsHamburgerMenuOpen: (isOpen: boolean) => void;
};
const NavBarLinks = ({ links, setIsHamburgerMenuOpen }: NavBarLinksProps) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="nav-links">
      <ul>
        {links.map((link) => (
          <Link
            to={link.path}
            className={`nav-link ${
              location.pathname === link.path ? "active" : ""
            }`}
            key={link.path}
            onClick={() => setIsHamburgerMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBarLinks;
