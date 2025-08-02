import NotificationsContainer from "@/components/layout/NotificationsPage/NotificationsContainer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const NotificationsPage = () => {
  return (
    <>
      <Header PageName="الاشعارات" returnState />
      <NotificationsContainer />
    </>
  );
};

export default NotificationsPage;
