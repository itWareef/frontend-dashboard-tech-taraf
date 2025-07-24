import getAuthToken, { removeAuthToken } from "@/services/cookies";
import { useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext({
  token: "",
  setToken: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  handleLogout: () => {},
  isLoading: true,
  user: null,
});

const fetchUserProfile = async (token, setUser, setIsLoggedIn) => {
  try {
    const res = await fetch(
      "https://api.taraf.dashboard-tech.com/api/admins/me",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch profile");
    const data = await res.json();
    console.log(data?.data);
    setUser(data?.data);
    setIsLoggedIn(true);
  } catch (err) {
    console.error(err || "Invalid token");
    setUser(null);
    setIsLoggedIn(false);
  }
};

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken() || "");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (token) {
      fetchUserProfile(token, setUser, setIsLoggedIn);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, [token]);

  const refreshUser = () => {
    if (token) {
      fetchUserProfile(token, setUser, setIsLoggedIn);
    }
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
    removeAuthToken();
    queryClient.clear();

    setIsLoggedIn(false);
  };

  const value = {
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    user,
    setUser,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;
