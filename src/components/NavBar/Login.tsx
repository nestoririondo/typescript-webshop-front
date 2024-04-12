import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import "../../styles/login.css";

export type LoginData = {
  email: string;
  password: string;
};

type LoginProps = {
  onLogin: () => void;
};

const Login = ({ onLogin }: LoginProps) => {
  const [userInput, setUserInput] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user, login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    e.preventDefault();
    setIsLoading(true);
    if (isLoading) return;
    await login(userInput)
      .then(() => {
        onLogin();
      })
      .catch((res) => {
        setError(res.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input onChange={handleChange} type="email" name="email" />
          </label>
          <label>
            Password
            <input onChange={handleChange} type="password" name="password" />
          </label>
          <button type="submit">Log in</button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Login;
