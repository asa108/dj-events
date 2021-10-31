import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  // Registor user
  const registor = async (user) => {
    console.log(user);
  };

  // Login User
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // Logout User
  const logout = async () => {
    console.log("logout");
  };

  // check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("check");
  };

  return (
    <AuthContext.Provider value={{ user, error, registor, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
