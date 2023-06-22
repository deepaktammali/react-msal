import { MsalProvider } from "@azure/msal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { publicClientApplication } from "./config/msal/public-client-application.ts";
import "./index.css";
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={publicClientApplication}>
      <RouterProvider router={router}></RouterProvider>
    </MsalProvider>
  </React.StrictMode>
);
