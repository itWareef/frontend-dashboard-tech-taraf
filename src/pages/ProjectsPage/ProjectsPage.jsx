import ProjectsContainer from "@/components/layout/ProjectsPage/ProjectsContainer";
import Header from "@/components/shared/Header/Header";

const ProjectsPage = () => {
  return (
    <>
      <Header PageName="المشاريع" returnState={true} />

      <ProjectsContainer />
    </>
  );
};

export default ProjectsPage;
