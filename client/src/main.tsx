import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

import routes from "@/router";
import { RouterProvider } from "react-router-dom";

import PageNotFound from "@/pages/PageNotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <NextUIProvider>
         <RouterProvider router={routes} fallbackElement={<PageNotFound />} />
      </NextUIProvider>
   </React.StrictMode>
);
