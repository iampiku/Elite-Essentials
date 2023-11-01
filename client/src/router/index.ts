import App from "@/App";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
   {
      path: "/",
      Component: App,
   },
   {
      path: "/login",
      Component: Login,
   },
   {
      path: "/signup",
      Component: Signup,
   },
]);

export default routes;
