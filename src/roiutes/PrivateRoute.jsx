import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center ">
      <span className="loading loading-bars loading-md mx-auto"></span>;
    </div>
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
