import HomePage from "./home-page";
import DefaultLayout from "../../shared/layouts/index";

export const homeRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};
