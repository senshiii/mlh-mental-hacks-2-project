import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthProtection = ({ children }) => {

  const { isAuth } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(() => {
    if(!isAuth) nav("/signin")
  }, [])

  return children
}

export default AuthProtection