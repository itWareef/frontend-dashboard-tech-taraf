import ProjectOverviewContainer from "@/components/layout/ProjectOverviewPage/ProjectOverviewContainer";
import Header from "@/components/shared/Header/Header";

const ProjectOverview = () => {
  return (
    <section>
      <Header PageName=" استعراض المشاريع" returnState={true} />
      <ProjectOverviewContainer />
    </section>
  );
};

export default ProjectOverview;
