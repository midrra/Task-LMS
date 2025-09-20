import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/hook/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || !allowedRoles.includes(user.role)) {
    useEffect(() => {
      navigate("/login");
    }, []);
    return null;
  }
  return children;
};
export default ProtectedRoute;
