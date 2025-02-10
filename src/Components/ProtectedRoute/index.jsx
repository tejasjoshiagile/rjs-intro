import React from "react";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const isUserLogin = localStorage.getItem("useLogin");

  return isUserLogin ? <Outlet /> : <Navigate to={"/login"} />;
};
import PropTypes from "prop-types";

ProtectedRoutes.propTypes = {
  child: PropTypes.node,
};
