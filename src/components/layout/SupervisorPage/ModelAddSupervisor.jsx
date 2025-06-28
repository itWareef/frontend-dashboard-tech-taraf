"use client";

import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import ModelAddSupervisorTBody from "./ModelAddSupervisorTBody";

export default function ModelAddSupervisor({
  handleCloseModel,
  selectedSupervisor,
  handleAdd,
  handleEdit,
}) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const validationSchema = Yup.object({
    imageSupervisor: Yup.mixed().required("صورة المشرف مطلوبة"),
    supervisorName: Yup.string().required("اسم المشرف مطلوب"),
    typeSupervisor: Yup.string().required("نوع المشرف مطلوب"),
    phone: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9]{10,}$/, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
  });

  // console.log("Form data to be submitted:", {
  //   image: values.imageSupervisor,
  //   name: values.SupervisorName,
  //   type: values.typeSupervisor,
  //   phone: values.phone,
  //   email: values.email,
  // });
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("image", values.imageSupervisor);
    formData.append("name", values.supervisorName);
    formData.append("type", values.typeSupervisor);
    formData.append("phone", values.phone);
    formData.append("email", values.email);

    if (selectedSupervisor) {
      handleEdit(formData, selectedSupervisor.id);
      formik.resetForm();
    } else {
      handleAdd(formData);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      imageSupervisor: null,
      imagePreview: selectedSupervisor?.supervisorImage || "",
      supervisorName: selectedSupervisor?.supervisorName || "",
      typeSupervisor: selectedSupervisor?.type || "",
      phone: selectedSupervisor?.phone || "",
      email: selectedSupervisor?.email || "",
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
        "imageSupervisor",
        "حجم الملف كبير جداً (الحد الأقصى 5 ميجابايت)"
      );
      return;
    }

    setUploading(true);
    formik.setFieldError("imageSupervisor", "");

    const reader = new FileReader();
    reader.onload = (e) => {
      formik.setFieldValue("imageSupervisor", file);
      formik.setFieldValue("imagePreview", e.target?.result);
      setUploading(false);
    };
    reader.onerror = () => {
      formik.setFieldError("imageSupervisor", "خطأ في قراءة الملف");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    formik.setFieldValue("imageSupervisor", null);
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
                    صورة المشرف
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    اسم المشرف
                  </th>
                  <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
                    نوع المشرف
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

              <ModelAddSupervisorTBody
                selectedSupervisor={selectedSupervisor}
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
