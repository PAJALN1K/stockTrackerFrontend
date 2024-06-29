import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import {
  publicRoutes,
  privateRoutes,
  authRoutes,
  nonAuthRoutes,
} from "../router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);

  function renderAuth() {
    if (
      auth.username === null ||
      auth.username === undefined ||
      auth.password === null ||
      auth.password === undefined
    ) {
      return false;
    }
    return true;
  }

  return renderAuth() ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      {nonAuthRoutes.map((route) => (
        <Route
          path={route.path}
          element={<Navigate to="/companies" replace />}
          key={route.path}
        ></Route>
      ))}
      <Route path="/*" element={<Navigate to="/nav" replace />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      {authRoutes.map((route) => (
        <Route
          path={route.path}
          element={<Navigate to="/login" replace />}
          key={route.path}
        ></Route>
      ))}
      <Route path="/*" element={<Navigate to="/nav" replace />}></Route>
    </Routes>
  );
};

export default AppRouter;
