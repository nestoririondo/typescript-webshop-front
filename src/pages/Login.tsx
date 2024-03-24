import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import NavBar from "../components/NavBar";

export type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const [userInput, setUserInput] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user, login } = useAuth;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoading) return;
    await login(userInput).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <NavBar />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="mary@me.com"
          />
          <input onChange={handleChange} type="password" name="password" />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
