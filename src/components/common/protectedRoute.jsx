import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";
import { Component } from "react";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      //path={path} replaced with {...rest}. It will give all the req props.
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    ></Route>
  );
};

export default ProtectedRoute;
