import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main className="mx-auto max-w-[1320px] my-t overflow-y-auto px-4 pb-0 md:px-6 lg:px-8 ">
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
