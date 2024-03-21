import axios from "axios";
import { createContext, useState, useContext } from "react";
import { SERVER } from "../constants/server";
import { UserInput } from "../pages/Login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = async (userInput: UserInput) => {
    const response = await axios.post(`${SERVER}/auth/login`, userInput);
    setUser(response.data.data);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
