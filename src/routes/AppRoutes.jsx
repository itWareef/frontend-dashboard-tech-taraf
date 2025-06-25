import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRoutes = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRoutes;
