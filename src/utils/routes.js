import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Index from "../pages/Index";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",

        children: [
          {
            path: "/",
            Component: Index,
          },
          {
            path: "/about",
            Component: About,
          },
        ],
      },

      {
        path: "/projects",
        Component: Projects,
      },
    ],
  },
]);

export default routes;
