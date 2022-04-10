import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Navigate} from 'react-router-dom';

interface Props {
  children: JSX.Element;
}
export const ProtectedRoute = ({children}: Props) => {
  const {userIsLoggedIn} = useContext(AuthContext);
  console.log('checkIfLogged', userIsLoggedIn)

  return userIsLoggedIn ? children : <Navigate to="/register" replace />;
};
