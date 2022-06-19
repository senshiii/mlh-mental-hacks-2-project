import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  setAuthState: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const setAuthState = (authState) => {
    setIsAuth(authState);
  };

  // console.log('Auth State -> ', isAuth);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
