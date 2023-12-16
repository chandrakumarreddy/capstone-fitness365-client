import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

import { Spin } from "antd";

type User = {
  token: string;
};

const AuthContext = createContext<{
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useLocalStorage<User | null>("token");
  const [fontsLoaded, setFontedLoaded] = useState(false);
  const navigate = useNavigate();

  const login = (data: User) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  useEffect(() => {
    document.fonts.ready.finally(() => {
      setFontedLoaded(true);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  if (loading) {
    return <Spin />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
