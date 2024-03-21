import { useState } from "react";
import { createUser } from "../api/users";

export type User = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    createUser(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <h1>Signup</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Mary Smith"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="mary@me.com"
          />
          <input onChange={handleChange} type="password" name="password" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;