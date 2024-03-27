import { useAuth } from "../context/useAuth";

type LogoutProps = {
  setUserMenu: (arg: boolean) => void;
};

const Logout = ({ setUserMenu }: LogoutProps) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setUserMenu(false);
  };
  return (
    <div className="login-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
