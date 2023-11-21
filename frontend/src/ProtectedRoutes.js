// ProtectedRoutes.js
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProtectedRoutes({ element: Element, ...rest }) {
  const token = cookies.get("TOKEN");

  return (
    <Route
      {...rest}
      element={
        token ? (
          <Element />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/" state={{ from: rest.location }} />}
            />
          </Routes>
        )
      }
    />
  );
}
