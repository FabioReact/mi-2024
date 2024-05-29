import { ReactElement, createContext, useContext, useState } from 'react';
import { registerUser } from '../api/user';

type AuthContextType = {
  email: string;
  token: string | null;
  connected: boolean;
  // eslint-disable-next-line no-unused-vars
  login: ({ email }: { email: string }) => void;
  // eslint-disable-next-line no-unused-vars
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
  const login = ({ email }: Pick<AuthContextState, 'email'>) => {
    setUser({
      email,
      token: 'y',
      connected: true,
    });
  };
  const register = async ({ email, password }: {email: string, password: string}) => {
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
