import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import Login from "./pages/Login.tsx";

import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <NextUIProvider>
         <RouterProvider router={router} />
      </NextUIProvider>
   </React.StrictMode>
);
