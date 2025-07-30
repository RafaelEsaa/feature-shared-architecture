import ContactPage from "./contact-page";
import DefaultLayout from "../../shared/layouts/index";

export const contactRoutes = {
  path: "/contact",
  element: <DefaultLayout />,
  children: [
    {
      index: true,
      element: <ContactPage />,
    },
  ],
};
