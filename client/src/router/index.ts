import App from "@/App";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import PageNotFound from "@/pages/PageNotFound";
import ForgetPassword from "@/pages/ForgetPassword";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
   {
      path: "/",
      Component: App,
      ErrorBoundary: PageNotFound,
   },
   {
      path: "/login",
      Component: Login,
   },
   {
      path: "/signup",
      Component: Signup,
   },
   {
      path: "/forget-password",
      Component: ForgetPassword,
   },
]);

export default routes;
