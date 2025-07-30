import BlogPages from "./pages/about-pages";
import DefaultLayout from "@/shared/layouts";

export const aboutRoutes = {
  path: "/about",
  element: <DefaultLayout />,
  children: [
    {
      index: true,
      element: <BlogPages />,
      // loader: HomePage.loader, // Exportado desde HomePage
      // errorElement: <ErrorBoundary />,
    },
  ],
};
