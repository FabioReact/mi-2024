import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "heroes",
          Component: Heroes
        },
        {
          path: "login",
          Component: Login
        },
        {
          path: "register",
          Component: Register
        },
      ]
    },
  ]);


export default router