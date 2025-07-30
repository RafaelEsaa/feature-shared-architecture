import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "../../features/home/router";
import { contactRoutes } from "../../features/contact/router";
import { aboutRoutes } from "../../features/about/router";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  homeRoutes,
  contactRoutes,
  aboutRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);
