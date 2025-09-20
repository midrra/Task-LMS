// Example of a UserContext
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = { user, setUser, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
