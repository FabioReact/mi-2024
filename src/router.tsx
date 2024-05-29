import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

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
        {
          path: "profile",
          Component: Profile
        },
      ]
    },
  ]);


export default router