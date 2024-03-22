import axios from "axios";
import { createContext, useState, useContext, ReactNode } from "react";
import { SERVER } from "../constants/server";
import { LoginData } from "../pages/Login";

type AuthContextType = {
  user: User | undefined;
  login: (userInput: LoginData) => Promise<void>;
};

type User = {
  id: string;
  name: string;
  email: string;
  profilePic?: string;
  createdAt: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();

  const login = async (userInput: LoginData) => {
    const user = await axios
      .post<User>(`${SERVER}/auth/login`, userInput)
      .then((response) => response.data);
    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
