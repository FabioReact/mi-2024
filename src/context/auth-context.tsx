import { ReactElement, createContext, useContext } from 'react';

type AuthContextType = {
  email: string;
  token: string;
};

type AuthContextProviderProps = {
  children: ReactElement
}

const AuthContext = createContext<AuthContextType>(null!);

const useAuthContext = () => useContext(AuthContext)


const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  return (
    <AuthContext.Provider value={{
      email: 'test@email.com',
      token: 'cgbdfbkdmni65r',
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContextProvider,
  useAuthContext
}
