import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface RouteProps {
  children: ReactNode;
}

export const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
  const token = localStorage.getItem("logintoken");
  return token ? children : <Navigate to="/login" replace />;
};

export const GuestRoute: React.FC<RouteProps> = ({ children }) => {
  const token = localStorage.getItem("logintoken");
  return token ? <Navigate to="/dashboard" replace /> : children;
};

export const PublicRoute: React.FC<RouteProps> = ({ children }) => {
  return children;
};
