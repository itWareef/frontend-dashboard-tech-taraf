import { svgIcons } from "@/svgIcons";
import { useState } from "react";
import ModelAddProject from "./ModelAddProject";
import ProjectsTBody from "./ProjectsTBody";
import ProjectsTH from "./ProjectsTH";
const ProjectsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const [projects, setProjects] = useState(
    Array(20)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        projectName: `مشروع ${index + 1}`,
        developerName: "شركة التطوير XYZ",
        neighborhood: `عبدالرحمن علي ${index + 1}`,
        unitNum: 30 + index,
      }))
  );

  const handleDelete = (projectId) => {
    console.log("Delete project:", projectId);
    // Add your delete logic here
  };

  const handleAdd = (values) => {
    const newProject = {
      id: projects.length + 1,
      projectName: values.projectName,
      developerName: values.developerName,
      neighborhood: values.neighborhood,
      unitNum: values.unitNum,
    };

    setProjects([...projects, newProject]);
    selectedProject(newProject);
    setIsOpen(false);
  };

  const handleEditClick = (supervisor) => {
    setSelectedProject(supervisor);
    setIsOpen(true);
  };

  const handleEdit = (values, id) => {
    const updatedProject = {
      id,
      projectName: values.projectName,
      developerName: values.developerName,
      neighborhood: values.neighborhood,
      unitNum: values.unitNum,
    };

    const updatedList = projects.map((pro) =>
      pro.id === id ? updatedProject : pro
    );

    setProjects(updatedList);
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Supervisor */}
        {isOpen && (
          <ModelAddProject
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedProject={selectedProject}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Project */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>{svgIcons.projects}</button>
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
                <ProjectsTH />

                {/* Table Body */}
                <ProjectsTBody
                  projects={projects}
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

export default ProjectsContainer;
