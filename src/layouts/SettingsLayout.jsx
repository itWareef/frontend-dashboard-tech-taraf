import { Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <main className=" h-screen bg-background px-4 pb-0 md:px-6 lg:px-8">
      <Outlet />
    </main>
  );
};

export default SettingsLayout;
