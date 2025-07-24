import ProjectsContainer from "@/components/layout/ProjectsPage/ProjectsContainer";
import Header from "@/components/shared/Header/Header";

const ProjectsPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="المشاريع" returnState={true} />

      <ProjectsContainer />
    </main>
  );
};

export default ProjectsPage;
