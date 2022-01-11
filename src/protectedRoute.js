import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth: isAuth, element: element, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <element />;
        } else {
          return (
            <Navigate to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
