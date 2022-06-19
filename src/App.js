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
import AuthStateMonitor from "./components/AuthStateMonitor";

const App = () => {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <AuthStateMonitor>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                  path="/profile"
                  element={
                    <AuthProtection>
                      <Profile />
                    </AuthProtection>
                  }
                />
                <Route path="/meditate" element={<Meditate />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </BrowserRouter>
          </AuthStateMonitor>
        </UserContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
};

export default App;
