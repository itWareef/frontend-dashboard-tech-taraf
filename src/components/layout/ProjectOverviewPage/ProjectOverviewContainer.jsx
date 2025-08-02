import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";

import { Search } from "lucide-react";
import ProjectOverviewTH from "./ProjectOverviewTH";
import ProjectOverviewTBody from "./ProjectOverviewTBoody";
import { svgIcons } from "@/components/shared/svgIcons";
import ProjectOverviewDeveloperTH from "./ProjectOverviewDeveloperTH";
import ProjectOverviewDeveloperTBoody from "./ProjectOverviewDeveloperTBoody";
import ModelAddProjectOverview from "./ModelAddProjectOverview";
import ModelAddProjectOverviewDeveloper from "./ModelAddProjectOverviewDeveloper";

const ProjectOverviewContainer = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isOpenModelProject, setIsOpenModelProject] = useState(false);
  const [isOpenModelDeveloper, setIsOpenModelDeveloper] = useState(false);

  const handleOpenModelProject = () => {
    setIsOpenModelProject(true);
  };

  const handleCloseModelProject = () => {
    setIsOpenModelProject(false);
  };

  const handleOpenModelDeveloepr = () => {
    setIsOpenModelDeveloper(true);
  };

  const handleCloseModelDeveloepr = () => {
    setIsOpenModelDeveloper(false);
  };

  const [projectsOverview, setProjectsOverview] = useState(
    new Array(10).fill(null).map((_, index) => ({
      id: index + 1,
      projectName: `Project ${index + 1}`,
      projectDescription: `Description for Project ${index + 1}`,
      developerName: `Developer ${index + 1}`,
      minPrice: 100000,
      maxPrice: 200000,
      minArea: 100,
      unitsCount: 10,
      salePercentage: 50,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      projectImage: superVisorImg,
    }))
  );

  const [developersOverview, setDevelopersOverview] = useState(
    new Array(10).fill(null).map((_, index) => ({
      developerName: `Developer ${index + 1}`,
      developerLogo: "public/taraf.png",
      developerLogo2: "public/taraf.png",
      projectsCount: 10,
      area: "100م",
      builtArea: "100م",
    }))
  );

  return (
    <>
      {isOpenModelProject && (
        <ModelAddProjectOverview
          handleCloseModelProject={handleCloseModelProject}
        />
      )}
      {isOpenModelDeveloper && (
        <ModelAddProjectOverviewDeveloper
          handleCloseModelDeveloepr={handleCloseModelDeveloepr}
        />
      )}
      <section className="bg-card p-3 rounded-[20px] my-3 space-y-4 ">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("projects")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "projects"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              المشروعات{" "}
            </button>
            <button
              onClick={() => setActiveTab("developers")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "developers"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              المطورين{" "}
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[250px]">
            <img src={svgIcons.filterIcon} className="w-6 h-6" alt="filter" />
            <div className="relative">
              <Search className="text-muted absolute top-1/2 right-2 transform -translate-y-1/2" />
              <input
                type="text"
                className="bg-white rounded-[6px] py-2 ps-10 pe-2 text-sm"
                placeholder="بحث"
              />
            </div>
          </div>
        </header>

        <div className="h-[calc(100vh-260px)]  overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full border-separate border-spacing-y-6">
            {activeTab === "projects" ? (
              <>
                <ProjectOverviewTH />
                <ProjectOverviewTBody projectsOverview={projectsOverview} />
                <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                  <button onClick={() => handleOpenModelProject()}>
                    <img src={svgIcons.addThis} className="w-8 h-8" alt="add" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <ProjectOverviewDeveloperTH />
                <ProjectOverviewDeveloperTBoody
                  developersOverview={developersOverview}
                />
                <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                  <button onClick={() => handleOpenModelDeveloepr()}>
                    <img src={svgIcons.addThis} className="w-8 h-8" alt="add" />
                  </button>
                </div>
              </>
            )}
          </table>
        </div>
      </section>
    </>
  );
};

export default ProjectOverviewContainer;
