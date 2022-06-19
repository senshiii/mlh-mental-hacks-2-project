import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import AuthProtection from "./components/AuthProtection";
import Meditate from "./pages/Meditate";
import Support from "./pages/Support";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/profile"
                element={
                  // <AuthProtection>
                  <Profile />
                  // </AuthProtection>
                }
              />
              <Route path="/meditate" element={<Meditate />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </UserContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
