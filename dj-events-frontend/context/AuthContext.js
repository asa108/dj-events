import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

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
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setUser(data.user);
    } else {
      setError(data.message);
      setError(null);
    }
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
