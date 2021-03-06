import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useUser } from "reactfire";

import { JournalEntry } from "./components/journal/JournalEntry";
import { Home } from "./components/Home";

import { Milestones } from "./components/Milestones";
import { Food } from "./components/Food";
import { Test } from "./components/Test";
import { Changes } from "./components/Changes";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
  const { data: user } = useUser();
  let location = useLocation();

  if (!user && location.pathname !== "/") {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export const Router = () => {
  const routes = [
    { element: <Home />, path: "/" },
    { element: <Milestones />, path: "/milestones" },
    { element: <Changes />, path: "/changes" },
    { element: <Food />, path: "/food" },
    { element: <JournalEntry />, path: "/journal/post" },
    { element: <Test />, path: "/test" },
  ];

  return (
    <Routes>
      {routes.map(({ element, path }) => {
        return (
          <Route
            key={path}
            path={path}
            element={<RequireAuth>{element}</RequireAuth>}
          />
        );
      })}
    </Routes>
  );
};
