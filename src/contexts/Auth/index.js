import { useContext, createContext, useState, useEffect } from "react";

import auth from "../../services/Auth";
import api from "../../services/api";

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageDate() {
      const storagedUser = localStorage.getItem("@R:user");
      const storagedToken = localStorage.getItem("@R:token");

      if (storagedToken && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      }
    }
    loadStorageDate();
  }, []);
  async function signIn(data) {
    const response = await auth(data);
    setUser(response.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.token}`;

    localStorage.setItem("@R:user", JSON.stringify(response.user));
    localStorage.setItem("@R:token", response.token);
  }

  async function signOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContext;
