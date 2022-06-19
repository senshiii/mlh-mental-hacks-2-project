import { CircularProgress, Flex } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase";

const AuthStateMonitor = ({ children }) => {
  const { setUid } = useContext(UserContext);
  const { setAuthState } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("Auth State Changed. User ID -> ", user.uid);
        setUid(user.uid);
        setAuthState(true);
      }
    });
  }, []);

  return children;
};

export default AuthStateMonitor;
