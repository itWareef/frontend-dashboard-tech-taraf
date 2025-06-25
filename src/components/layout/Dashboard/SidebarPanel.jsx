import TaskManagerForm from "./TaskManagerForm";
import UserProfile from "./UserProfile";

const SidebarPanel = () => {
  return (
    <>
      <div className="  w-full space-y-8 lg:order-2 lg:max-w-[350px] rounded-lg  flex flex-col items-center  ">
        <UserProfile />
        <TaskManagerForm />
      </div>
    </>
  );
};

export default SidebarPanel;
