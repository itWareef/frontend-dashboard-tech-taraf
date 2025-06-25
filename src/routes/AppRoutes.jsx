import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/login";
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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRoutes;
