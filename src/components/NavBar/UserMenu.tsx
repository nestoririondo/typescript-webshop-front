import { useEffect, useRef } from "react";
import Logout from "./Logout";

type UserMenuProps = {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserMenu = ({ isUserMenuOpen, setIsUserMenuOpen }: UserMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsUserMenuOpen]);

  return (
    <nav
      ref={menuRef}
      className={`user-menu ${isUserMenuOpen ? "active" : ""}`}
    >
      <Logout onLogout={() => setIsUserMenuOpen(false)} />
    </nav>
  );
};

export default UserMenu;
