import { svgIcons } from "@/components/shared/svgIcons";
import { Search } from "lucide-react";
import { useState } from "react";
import GuaranteesTBody from "./guarantees/GuaranteesTBody";
import GuaranteesTH from "./guarantees/GuaranteesTH";
import ModelAddGuarantees from "./guarantees/ModelAddGuarantees/ModelAddGuarantees";
import ModelAddProject from "./ModelAddProject";
import ProjectsTBody from "./ProjectsTBody";
import ProjectsTH from "./ProjectsTH";
import ModelAddSuppliers from "./suppliers/ModelAddSuppliers/ModelAddSuppliers";
import SuppliersTBody from "./suppliers/SuppliersTBody";
import SuppliersTH from "./suppliers/SuppliersTH";
const ProjectsContainer = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpenGuarantees, setIsOpenGuarantees] = useState(false);
  const [isOpenSuppliers, setIsOpenSuppliers] = useState(false);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const handleModelGuarantees = () => {
    setIsOpenGuarantees(!isOpenGuarantees);
  };

  const handleModelSuppliers = () => {
    setIsOpenSuppliers(!isOpenSuppliers);
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
        guarantees: "ضمانات",
      }))
  );

  const [guarantees, setGuarantees] = useState(
    Array(20)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        guaranteeIcon: "/taraf.png",
        guaranteeName: "ملاذ",
        duration: "5 سنوات",
        supplier: "شركة الملاذ",
        projectsCount: "20",
      }))
  );

  const [suppliers, setSuppliers] = useState(
    Array(20)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        supplierName: `شركة الملاذ ${index + 1}`,
        supplierNumber: "123456789",
        supplierEmail: "company@example.com",
        supplierTaxNumber: "123456789",
      }))
  );

  const handleDelete = (projectId) => {
    console.log("Delete project:", projectId);
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
      {/* Model Add Project */}
      {isOpen && (
        <ModelAddProject
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedProject={selectedProject}
          handleEdit={handleEdit}
        />
      )}

      {/* Model Add Guarantees */}
      {isOpenGuarantees && (
        <ModelAddGuarantees handleModelGuarantees={handleModelGuarantees} />
      )}

      {/* Model Add Suppliers */}
      {isOpenSuppliers && (
        <ModelAddSuppliers handleModelSuppliers={handleModelSuppliers} />
      )}

      <section className="bg-card p-3 relative rounded-[20px] my-3 space-y-4">
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
              المشاريع
            </button>
            <button
              onClick={() => setActiveTab("guarantees")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "guarantees"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              الضمانات{" "}
            </button>
            <button
              onClick={() => setActiveTab("suppliers")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "suppliers"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              الموردين{" "}
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[250px]">
            <img src="\Icons\filter.svg" className="w-6 h-6" alt="filter" />
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

        <div className="h-[calc(100vh-265px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeTab === "projects" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <ProjectsTH />
                <ProjectsTBody
                  projects={projects}
                  handleDelete={handleDelete}
                  handleEdit={handleEditClick}
                />
              </table>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button onClick={() => setIsOpen(true)}>
                  <img
                    src="\Icons\Icon material-outline-add-home.svg"
                    className="w-8 h-8"
                    alt="add"
                  />
                </button>
              </div>
            </>
          )}

          {activeTab === "guarantees" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <GuaranteesTH />
                <GuaranteesTBody guarantees={guarantees} />
              </table>

              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button onClick={() => handleModelGuarantees()}>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}

          {activeTab === "suppliers" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <SuppliersTH />
                <SuppliersTBody suppliers={suppliers} />
              </table>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button onClick={() => handleModelSuppliers()}>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsContainer;
