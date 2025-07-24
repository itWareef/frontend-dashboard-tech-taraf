import { useFormik } from "formik";
import ModelAddProjectTBody from "./ModelAddProjectTBody";

export default function ModelAddProject({
  handleCloseModel,
  selectedProject,
  handleAdd,
  handleEdit,
}) {
  const handleSubmit = (values) => {
    if (selectedProject) {
      handleEdit(values, selectedProject.id);
      formik.resetForm();
    } else {
      handleAdd(values);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      projectName: selectedProject?.projectName || "",
      developerName: selectedProject?.developerName || "",
      neighborhood: selectedProject?.neighborhood || "",
      unitNum: selectedProject?.unitNum || "",
    },
    // validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="p-8 backdrop-blur-sm  fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-card rounded-2xl p-2 overflow-hidden">
            <table className="w-full border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-r-[6px] ">
                    اسم المشروع{" "}
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    اسم المطور{" "}
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    الحي{" "}
                  </th>

                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-l-[6px] ">
                    عدد الوحدات{" "}
                  </th>
                  <th className="w-[160px] ps-4   ">
                    <button
                      type="submit"
                      className="py-3 flex cursor-pointer text-center gap-3 items-center justify-center w-full text-white font-normal text-[27px] bg-secondary rounded-[6px]"
                    >
                      <svg
                        width="20"
                        height="38"
                        viewBox="0 0 31 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.945801 32.4425H30.9458V37.0217H0.945801V32.4425ZM10.8029 26.2606L0.945801 15.7285L5.23151 11.3782L10.8029 17.3312L26.6601 0.388184L30.9458 4.96737L10.8029 26.2606Z"
                          fill="white"
                        />
                      </svg>
                      حفظ
                    </button>
                  </th>
                </tr>
              </thead>

              <ModelAddProjectTBody
                selectedProject={selectedProject}
                formik={formik}
                handleCloseModel={handleCloseModel}
              />
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
