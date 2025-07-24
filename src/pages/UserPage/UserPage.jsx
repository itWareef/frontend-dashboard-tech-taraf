import UsersContainer from "@/components/layout/UsersPage/UsersContainer";
import Header from "@/components/shared/Header/Header";

const UserPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="المستخدمين" returnState={true} />

      <UsersContainer />
    </main>
  );
};

export default UserPage;
