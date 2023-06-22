import { Navigate, createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../pages/login";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/home" />,
          },
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/auth/login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
