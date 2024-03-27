import { useState } from "react";
import { useAuth } from "../context/useAuth";
import "../styles/login.css";

export type LoginData = {
  email: string;
  password: string;
};

type LoginProps = {
  setUserMenu: (arg: boolean) => void;
};

const Login = ({ setUserMenu }: LoginProps) => {
  const [userInput, setUserInput] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user, login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoading) return;
    await login(userInput).finally(() => setIsLoading(false));
    setUserMenu(false);
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="mary@me.com"
            />
          </label>
          <label>
            Password
            <input onChange={handleChange} type="password" name="password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
