import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/login";
import Dashboard from "@/pages/Dashboard/Dashboard";
import OrdersPage from "@/pages/OrdersPage/OrdersPage";
import SupervisorPage from "@/pages/SupervisorPage/SupervisorPage";
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
        {
          path: "/OrdersPage",
          element: <OrdersPage />,
        },
        {
          path: "/SupervisorPage",
          element: <SupervisorPage />,
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
