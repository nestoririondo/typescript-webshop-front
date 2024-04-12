import { RefObject, useCallback, useEffect, useRef } from "react";
import Logout from "./Logout";

type UserMenuProps = {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userMenuIconDiv: RefObject<HTMLDivElement>;
};

const UserMenu = ({
  isUserMenuOpen,
  setIsUserMenuOpen,
  userMenuIconDiv,
}: UserMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        userMenuIconDiv.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsUserMenuOpen(false);
    },
    [userMenuIconDiv, menuRef, setIsUserMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

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
