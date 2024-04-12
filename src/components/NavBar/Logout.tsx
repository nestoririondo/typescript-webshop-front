import { useAuth } from "../../context/useAuth";

type LogoutProps = {
  onLogout: () => void;
};

const Logout = ({ onLogout }: LogoutProps) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onLogout();
  };
  
  return (
    <div className="logout-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
