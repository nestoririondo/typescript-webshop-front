import { useState } from "react";
import { createUser } from "../api/users";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLoading) return;

    createUser(formData)
      .then(() => {
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <NavBar />
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
