import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import ModelAddUnitRequestsTBody from "./ModelAddUnitRequestsTBody";

export default function ModelAddUnitRequests({
  handleCloseModel,
  selectedClient,
  handleAdd,
  handleEdit,
}) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const validationSchema = Yup.object({
    clientImage: Yup.mixed().required("صورة المشرف مطلوبة"),

    clientName: Yup.string().required("اسم المشرف مطلوب"),
    clientContract: Yup.string().required("نوع المشرف مطلوب"),
    unitNumber: Yup.string().required("نوع المشرف مطلوب"),
    projectName: Yup.string().required("نوع المشرف مطلوب"),
    neighborhood: Yup.string().required("نوع المشرف مطلوب"),

    phone: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9]{10,}$/, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("image", values.clientImage);

    formData.append("name", values.clientName);
    formData.append("contract", values.clientContract);
    formData.append("unitNumber", values.unitNumber);
    formData.append("projectName", values.projectName);
    formData.append("neighborhood", values.neighborhood);
    formData.append("phone", values.phone);
    formData.append("email", values.email);

    if (selectedClient) {
      handleEdit(formData, selectedClient.id);
      formik.resetForm();
    } else {
      handleAdd(formData);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      clientImage: null,
      imagePreview: null,
      clientName: selectedClient?.clientName || "",
      clientContract: selectedClient?.clientContract || "",
      unitNumber: selectedClient?.unitNumber || "",
      projectName: selectedClient?.projectName || "",
      neighborhood: selectedClient?.neighborhood || "",
      phone: selectedClient?.phone || "",
      email: selectedClient?.email || "",
    },
    // validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      formik.setFieldError("imageSupervisor", "يرجى اختيار ملف صورة صحيح");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      formik.setFieldError(
        "clientImage",
        "حجم الملف كبير جداً (الحد الأقصى 5 ميجابايت)"
      );
      return;
    }

    setUploading(true);
    formik.setFieldError("clientImage", "");

    const reader = new FileReader();
    reader.onload = (e) => {
      formik.setFieldValue("clientImage", file);
      formik.setFieldValue("imagePreview", e.target?.result);
      setUploading(false);
    };
    reader.onerror = () => {
      formik.setFieldError("clientImage", "خطأ في قراءة الملف");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    formik.setFieldValue("clientImage", null);
    formik.setFieldValue("imagePreview", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-8 backdrop-blur-sm  fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-card rounded-2xl p-2 overflow-hidden">
            <table className="w-full border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-r-[6px] ">
                    صورة العميل
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    اسم العميل
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    عقود العميل
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    رقم الوحده
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    اسم المشروع
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    الحي
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    رقم الهاتف
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-l-[6px] ">
                    البريد الإلكتروني
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

              <ModelAddUnitRequestsTBody
                formik={formik}
                uploading={uploading}
                fileInputRef={fileInputRef}
                handleFileSelect={handleFileSelect}
                removeImage={removeImage}
                handleCloseModel={handleCloseModel}
              />
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
