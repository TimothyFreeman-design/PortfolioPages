// src/components/Router.jsx
import React, { useState, useEffect } from "react";

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
};

export const Router = ({ children }) => {
  const { currentPath } = useRouter();

  const route = React.Children.toArray(children).find(
    (child) => child.props.path === currentPath
  );

  return route || null;
};

export const Route = ({ path, children }) => children;
