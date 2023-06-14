import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loadign/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
