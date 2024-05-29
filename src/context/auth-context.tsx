import { ReactElement, createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '../api/user';
import { UserRequest } from '../types/user';

type AuthContextType = {
  email: string;
  token: string | null;
  connected: boolean;
  login: ({ email, password }: UserRequest) => Promise<{ success: boolean }>;
  register: ({ email, password }: { email: string, password: string }) => void;
};

type AuthContextState = Omit<AuthContextType, 'login'|'register'>;

type AuthContextProviderProps = {
  children: ReactElement;
};

const AuthContext = createContext<AuthContextType>(null!);

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<AuthContextState>({
    email: '',
    token: null,
    connected: false,
  });

  const login = async ({ email, password }: UserRequest) => {
    const response = await loginUser({ email, password })
    if ('error' in response) {
      return { success: false };
    }
    setUser({
      email,
      token: response.token,
      connected: true,
    });
    return { success: true };
  };

  const register = async ({ email, password }: UserRequest) => {
    const { accessToken } = await registerUser({ email, password });
    setUser({
      email,
      token: accessToken,
      connected: true,
    });
  };

  return <AuthContext.Provider value={{ ...user, login, register }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, useAuthContext };
