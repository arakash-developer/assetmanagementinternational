import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type RouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("logintoken");
  return token ? children : <Navigate to="/login" replace />;
};

export const GuestRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("logintoken");
  return token ? <Navigate to="/dashboard" replace /> : children;
};

export const PublicRoute = ({ children }: RouteProps) => {
  return children;
};
