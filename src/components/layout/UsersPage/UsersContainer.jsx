import { useState } from "react";
import userImg from "../../../assets/imgProfile.png";
import ModelAddUsers from "./ModelAddUsers";
import UsersTBody from "./UsersTBody";
import UsersTH from "./UsersTH";
import { svgIcons } from "@/components/shared/svgIcons";
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
      {/* Model Add Users */}
      {isOpen && (
        <ModelAddUsers
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedUser={selectedUser}
          handleEdit={handleEdit}
        />
      )}

      <section className="bg-card p-3 relative rounded-[20px] my-3 space-y-4">
        <div className="h-[calc(100vh-200px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-[80px] fixed bottom-0 left-0 translate-x-0  -translate-y-2  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              {svgIcons.addSupervisor}
            </button>
          </div>
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
      </section>
    </>
  );
};

export default UsersContainer;
