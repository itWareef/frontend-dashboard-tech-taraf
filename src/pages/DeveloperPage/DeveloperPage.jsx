import DeveloperContainer from "@/components/layout/DevelopersPage/DeveloperContainer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const DeveloperPage = () => {
  return (
    <>
      <Header PageName="المطورين" returnState={true} />

      <DeveloperContainer />
    </>
  );
};

export default DeveloperPage;
