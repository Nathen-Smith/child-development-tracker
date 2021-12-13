import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useUser } from "reactfire";

import { JournalEntry } from "./components/JournalEntry";
import { Home } from "./components/Home";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
  const { data: user } = useUser();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export const Router = () => {
  // add routes here
  // note that Home is probably the only route that does not need user to be signed in (auth)
  const routes = [
    { element: <Home />, path: "/", auth: false },
    { element: <JournalEntry />, path: "/journal/post", auth: true },
  ];

  return (
    <Routes>
      {routes.map(({ element, path, auth }) => {
        return (
          <Route
            path={path}
            element={auth ? <RequireAuth>{element}</RequireAuth> : element}
          />
        );
      })}
    </Routes>
  );
};
