import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  console.log("[AuthContext] isAuth", isAuth);
  const toggleAuth = () => {
    setIsAuth((prevAuthState) => !prevAuthState);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        toggleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
