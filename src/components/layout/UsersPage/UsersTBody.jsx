const UsersTBody = ({ users, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={user.userImage}
              alt={user.userName}
              className="w-10 h-10 rounded-full"
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

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {user.password}
          </td>

          <td className="w-[160px]">
            <div className="flex border-r-[1px] border-secondary rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(user)}
                className="flex-1 cursor-pointer py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                aria-label="تعديل"
              ></button>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex-1 cursor-pointer py-5 relative flex justify-center items-center"
                aria-label="حذف"
              >
                <div className="absolute right-0 h-full w-[2px] bg-secondary" />
                <svg
                  width="22"
                  height="27"
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.59961 24C1.59961 25.65 2.94961 27 4.59961 27H16.5996C18.2496 27 19.5996 25.65 19.5996 24V6H1.59961V24ZM5.28961 13.32L7.40461 11.205L10.5996 14.385L13.7796 11.205L15.8946 13.32L12.7146 16.5L15.8946 19.68L13.7796 21.795L10.5996 18.615L7.41961 21.795L5.30461 19.68L8.48461 16.5L5.28961 13.32ZM15.8496 1.5L14.3496 0H6.84961L5.34961 1.5H0.0996094V4.5H21.0996V1.5H15.8496Z"
                    fill="#1C7E68"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersTBody;
