import { svgIcons } from "@/svgIcons";
import { useFormik } from "formik";
import * as Yup from "yup";
import ModelAddContractTBody from "./ModelAddContractTBody";

export default function ModelAddContract({
  handleCloseModel,
  selectedContract,
  handleAdd,
  handleEdit,
}) {
  const validationSchema = Yup.object({
    clientName: Yup.string().required("اسم العميل مطلوب"),
    project: Yup.string().required("اسم المشروع مطلوب"),
    unitNumber: Yup.string().required("رقم الوحدة مطلوب"),
    maintenanceStart: Yup.date().required("بداية عقد الصيانة مطلوبة"),
    maintenanceEnd: Yup.date().required("نهاية عقد الصيانة مطلوبة"),
    amount: Yup.date().required(" مبلغ العقد مطلوب  "),
  });

  const handleSubmit = (values) => {
    if (selectedContract) {
      handleEdit(values, selectedContract.id);
      formik.resetForm();
    } else {
      handleAdd(values);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      clientName: selectedContract?.clientName || "",
      project: selectedContract?.project || "",
      unitNumber: selectedContract?.unitNumber || "",
      maintenanceStart: selectedContract?.maintenanceStart || "",
      maintenanceEnd: selectedContract?.maintenanceEnd || "",
      amount: selectedContract?.amount || "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="p-8 backdrop-blur-sm shadow-md  fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className="max-w-8xl mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-card rounded-2xl p-2 overflow-hidden">
            <table className="w-full border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    اسم العميل
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    المشروع
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    رقم الوحدة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    بداية الصيانة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    نهاية الصيانة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-l-[6px]">
                    مبلغ العقد
                  </th>
                  <th className="w-[160px] ps-4">
                    <button
                      type="submit"
                      className="py-3 flex cursor-pointer text-center gap-3 items-center justify-center w-full text-white font-normal text-[27px] bg-secondary rounded-[6px]"
                    >
                      {svgIcons.saveIcon}
                      حفظ
                    </button>
                  </th>
                </tr>
              </thead>
              <ModelAddContractTBody
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
