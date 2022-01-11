import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth: isAuth, element: Element, ...rest }) => {
  return <>{isAuth ? Element : <Navigate to={{ pathname: "/" }} />}</>;
};

export default ProtectedRoute;
