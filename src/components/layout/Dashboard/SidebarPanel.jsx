import AssignExternalRequest from "./AssignExternalRequest";
import TaskManagerForm from "./TaskManagerForm";
import UserProfile from "./UserProfile";

const SidebarPanel = () => {
  return (
    <>
      <div className="gid grid-cols-1  max-w-full w-full space-y-4 rounded-lg lg:order-2 lg:max-w-[350px]">
        <UserProfile />
        <AssignExternalRequest />
        <TaskManagerForm />
      </div>
    </>
  );
};

export default SidebarPanel;
