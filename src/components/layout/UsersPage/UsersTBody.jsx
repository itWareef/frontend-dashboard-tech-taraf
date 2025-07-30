import { svgIcons } from "@/components/shared/svgIcons";

const UsersTBody = ({ users, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px">
            {index + 1}
          </td>

          <td className="px-2 py-3 bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 ]">
            <img
              src={user.userImage}
              alt={user.userName}
              className="w-10 h-10 rounded-full block mx-auto"
            />
          </td>

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {user.userName}
          </td>

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {user.role}
          </td>

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {user.phone}
          </td>

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {user.email}
          </td>

          <td className=" py-0 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(user)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
                aria-label="حذف"
              >
                {svgIcons.delete}
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersTBody;
