import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/login";
import ClientsPage from "@/pages/ClientsPage/ClientsPage";
import CompletedRequestsPage from "@/pages/CompletedRequestsPage/CompletedRequestsPage";
import ContractsPage from "@/pages/ContractsPage/ContractsPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";
import OrdersPage from "@/pages/OrdersPage/OrdersPage";
import PendingRequestsPage from "@/pages/PendingRequestsPage/PendingRequestsPage";
import SupervisorPage from "@/pages/SupervisorPage/SupervisorPage";
import UnitsPage from "@/pages/UnitsPage/UnitsPage";
import UserPage from "@/pages/UserPage/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRoutes = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/ordersPage", element: <OrdersPage /> },
        { path: "/supervisorPage", element: <SupervisorPage /> },
        { path: "/clientsPage", element: <ClientsPage /> },
        { path: "/completed-requests", element: <CompletedRequestsPage /> },
        { path: "/pending-requests", element: <PendingRequestsPage /> },
        { path: "/units", element: <UnitsPage /> },
        { path: "/users", element: <UserPage /> },
        { path: "/contracts", element: <ContractsPage /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRoutes;
