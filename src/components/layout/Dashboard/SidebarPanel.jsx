import TaskManagerForm from "./TaskManagerForm";
import UserProfile from "./UserProfile";

const SidebarPanel = () => {
  return (
    <>
      <div className="flex w-full max-w-full flex-col items-center space-y-8 rounded-lg lg:order-2 lg:max-w-[350px]">
        <UserProfile />
        <TaskManagerForm />
      </div>
    </>
  );
};

export default SidebarPanel;
