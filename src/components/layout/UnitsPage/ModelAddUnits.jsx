import { useFormik } from "formik";
import * as Yup from "yup";
import ModelAddUnitTBody from "./ModelAddUnitsTBody";

export default function ModelAddUnits({
  handleCloseModel,
  selectedUnit,
  handleAdd,
  handleEdit,
}) {
  const validationSchema = Yup.object({
    developer: Yup.string().required("اسم المطور مطلوب"),
    project: Yup.string().required("اسم المشروع مطلوب"),
    villaNumber: Yup.string().required("رقم الفيلا مطلوب"),
    unitNumber: Yup.string().required("رقم الوحدة مطلوب"),
    area: Yup.string().required("المساحة مطلوبة"),
    deedNumber: Yup.string().required("رقم الصك مطلوب"),
    deliveryDate: Yup.date().required("تاريخ التسليم مطلوب"),
    maintenanceStart: Yup.date().required("بداية عقد الصيانة مطلوبة"),
    maintenanceEnd: Yup.date().required("نهاية عقد الصيانة مطلوبة"),
    clientName: Yup.string().required("اسم العميل مطلوب"),
    clientNumber: Yup.string()
      .required("رقم العميل مطلوب")
      .matches(/^[0-9]{10,}$/, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
  });

  const handleSubmit = (values) => {
    if (selectedUnit) {
      handleEdit(values, selectedUnit.id);
      formik.resetForm();
    } else {
      handleAdd(values);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      developer: selectedUnit?.developer || "",
      project: selectedUnit?.project || "",
      villaNumber: selectedUnit?.villaNumber || "",
      unitNumber: selectedUnit?.unitNumber || "",
      area: selectedUnit?.area || "",
      deedNumber: selectedUnit?.deedNumber || "",
      deliveryDate: selectedUnit?.deliveryDate || "",
      maintenanceStart: selectedUnit?.maintenanceStart || "",
      maintenanceEnd: selectedUnit?.maintenanceEnd || "",
      clientName: selectedUnit?.clientName || "",
      clientNumber: selectedUnit?.clientNumber || "",
    },
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
                    المطور
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    المشروع
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    رقم الفيلا
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    رقم الوحدة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    المساحة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    رقم الصك
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    تاريخ التسليم
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    بداية الصيانة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    نهاية الصيانة
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    اسم العميل
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-l-[6px]">
                    رقم العميل
                  </th>
                  <th className="w-[160px] ps-4">
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
              <ModelAddUnitTBody
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
