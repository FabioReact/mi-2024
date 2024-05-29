import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";

const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "heroes",
      Component: Heroes
    },
  ]);


export default router