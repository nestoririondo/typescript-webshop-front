import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";

export type UserInput = {
  email: string;
  password: string;
};

const Login = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    email: "",
    password: "",
  });

  const { user, login } = useAuth;

  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(userInput);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h1>Login</h1>
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
