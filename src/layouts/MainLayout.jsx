import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex h-screen bg-background gap-x-2">
      <Sidebar />

      <div className="flex-1 overflow-y-auto px-4 pb-0 md:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
