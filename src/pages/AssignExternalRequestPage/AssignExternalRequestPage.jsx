import AssignExternalRequestContainer from "@/components/layout/AssignExternalRequestPage/AssignExternalRequestContainer";
import Header from "@/components/shared/Header/Header";
import HeaderDefaultLayout from "@/components/shared/HeaderDefaultLayout/HeaderDefaultLayout";
import React from "react";

const AssignExternalRequestPage = () => {
  return (
    <>
      <Header PageName="اسناد طلب خارجي" returnState={true} option="false" />

      <AssignExternalRequestContainer />
    </>
  );
};

export default AssignExternalRequestPage;
