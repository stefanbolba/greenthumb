import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const state = {};

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
