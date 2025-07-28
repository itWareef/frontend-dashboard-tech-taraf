import DefaultLayout from "@/layouts/DefaultLayout";
import MainLayout from "@/layouts/MainLayout";
import AddUnitRequestsPage from "@/pages/AddUnitRequestsPage/AddUnitRequestsPage";
import Login from "@/pages/auth/login";
import ClientsPage from "@/pages/ClientsPage/ClientsPage";
import CompletedRequestsPage from "@/pages/CompletedRequestsPage/CompletedRequestsPage";
import ContactRequests from "@/pages/ContactRequests/ContactRequests";
import ContractRequests from "@/pages/ContractRequests/ContractRequests";
import ContractsPage from "@/pages/ContractsPage/ContractsPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MapPage from "@/pages/MapPage/MapPage";
import NotFound from "@/pages/NotFound/NotFound";
import OrdersPage from "@/pages/OrdersPage/OrdersPage";
import PendingRequestsPage from "@/pages/PendingRequestsPage/PendingRequestsPage";
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage";
import SupervisorOrders from "@/pages/SupervisorOrders/SupervisorOrders";
import SupervisorPage from "@/pages/SupervisorPage/SupervisorPage";
import UnitsPage from "@/pages/UnitsPage/UnitsPage";
import UserPage from "@/pages/UserPage/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedAuth from "./ProtectedAuth";
import ProposalSubmissionPage from "@/pages/ProposalSubmissionPage/ProposalSubmissionPage";
import OfferPricePage from "@/pages/OfferPricePage.jsx/OfferPricePage";
import AssignExternalRequest from "@/pages/AssignExternalRequestPage/AssignExternalRequestPage";
import AssignExternalRequestPage from "@/pages/AssignExternalRequestPage/AssignExternalRequestPage";
import DeveloperPage from "@/pages/DeveloperPage/DeveloperPage";

const AppRoutes = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/new-requests", element: <OrdersPage /> },
        { path: "/supervisor-orders", element: <SupervisorOrders /> },
        { path: "/supervisorPage", element: <SupervisorPage /> },
        { path: "/clientsPage", element: <ClientsPage /> },
        { path: "/developers", element: <DeveloperPage /> },
        { path: "/completed-requests", element: <CompletedRequestsPage /> },
        { path: "/pending-requests", element: <PendingRequestsPage /> },
        { path: "/units", element: <UnitsPage /> },
        { path: "/users", element: <UserPage /> },
        { path: "/contracts", element: <ContractsPage /> },
        { path: "/contact-requests", element: <ContactRequests /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/proposals-submission", element: <ProposalSubmissionPage /> },
        { path: "/offer-price", element: <OfferPricePage /> },
        {
          path: "/assign-external-request",
          element: <AssignExternalRequestPage />,
        },
        {
          path: "contract-requests",
          element: <ContractRequests />,
        },
        { path: "/add-unit-requests", element: <AddUnitRequestsPage /> },
      ],
    },

    {
      path: "/",
      element: <DefaultLayout />,
      children: [{ path: "map", element: <MapPage /> }],
    },
    {
      path: "login",
      element: (
        <ProtectedAuth>
          <Login />
        </ProtectedAuth>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRoutes;
