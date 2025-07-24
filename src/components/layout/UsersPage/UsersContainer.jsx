import { useState } from "react";
import userImg from "../../../assets/imgProfile.png";
import ModelAddUsers from "./ModelAddUsers";
import UsersTBody from "./UsersTBody";
import UsersTH from "./UsersTH";
const UsersContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      userImage: userImg,
      userName: "عبدالرحمن علي",
      role: "مدير",
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      userImage: userImg,
      userName: "أحمد محمد",
      role: "مشرف",
      phone: "0551111111",
      email: "ahmed123@gmail.com",
      password: "654321",
    },
    {
      id: 3,
      userImage: userImg,
      userName: "منى خالد",
      role: "مستخدم",
      phone: "0552222222",
      email: "mona.khaled@gmail.com",
      password: "abcdef",
    },
    {
      id: 4,
      userImage: userImg,
      userName: "سارة علي",
      role: "مستخدم",
      phone: "0553333333",
      email: "sara.ali@gmail.com",
      password: "123abc",
    },
    {
      id: 5,
      userImage: userImg,
      userName: "خالد عمرو",
      role: "مشرف",
      phone: "0554444444",
      email: "khaled.amr@gmail.com",
      password: "password1",
    },
    {
      id: 6,
      userImage: userImg,
      userName: "ليلى حسن",
      role: "مدير",
      phone: "0555555555",
      email: "laila.hassan@gmail.com",
      password: "pass123",
    },
  ]);

  const handleDelete = (userId) => {
    console.log("Delete user:", userId);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };
  const handleAdd = (formdata) => {
    const newUser = {
      id: Date.now(),
      userImage: formdata.get("image"),
      userName: formdata.get("name"),
      role: formdata.get("role"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    };

    setUsers([...users, newUser]);
    setSelectedUser(newUser);
    setIsOpen(false);
  };

  const handleEdit = (formdata, id) => {
    const updatedUser = {
      id,
      userImage: formdata.get("image") || selectedUser.userImage,
      userName: formdata.get("name"),
      role: formdata.get("role"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    };

    const updatedList = users.map((user) =>
      user.id === id ? updatedUser : user
    );

    setUsers(updatedList);
    setSelectedUser(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Users */}
        {isOpen && (
          <ModelAddUsers
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedUser={selectedUser}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Users */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              <svg
                width="40"
                height="58"
                viewBox="0 0 66 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.7937 14.5005C46.2833 21.3849 41.0643 27.0011 35.3349 27.0011C29.6055 27.0011 24.3774 21.3862 23.8761 14.5005C23.3552 7.33877 28.4336 2 35.3349 2C42.2362 2 47.3146 7.46898 46.7937 14.5005Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.3345 35.335C24.0059 35.335 12.508 41.5852 10.3803 53.3826C10.1199 54.8045 10.9285 56.1692 12.4182 56.1692H58.2521C59.7418 56.1692 60.5465 54.8045 60.29 53.3826C58.161 41.5852 46.6631 35.335 35.3345 35.335Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  d="M9.29197 18.6675V33.2514V18.6675ZM16.5839 25.9595H2H16.5839Z"
                  fill="white"
                />
                <path
                  d="M9.29197 18.6675V33.2514M16.5839 25.9595H2"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Table Container with scroll */}
          <div className="relative h-full">
            <div
              className="absolute inset-0 overflow-y-auto rounded-[6px] 
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
            >
              <table className="w-full border-separate border-spacing-y-6">
                {/* Table Header */}
                <UsersTH />

                {/* Table Body */}
                <UsersTBody
                  users={users}
                  handleDelete={handleDelete}
                  handleEdit={handleEditClick}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersContainer;
