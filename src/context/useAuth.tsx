import axios from "axios";
import { createContext, useState, useContext, ReactNode } from "react";
import { SERVER } from "../constants/server";
import { LoginData } from "../components/Login";
import { v4 as uuidv4 } from "uuid";

type AuthContextType = {
  user: User | undefined;
  login: (userInput: LoginData) => Promise<void>;
  logout: () => void;
};

export type User = {
  id: typeof uuidv4;
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

  const logout = () => {
    setUser(undefined);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const value = useContext(AuthContext);

  if (value === undefined) {
    throw new Error("useAuth must be wrapped in a <AuthProvider />");
  }

  return value;
}
