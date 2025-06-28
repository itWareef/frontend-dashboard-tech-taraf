"use client";

import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import ModelAddUsersTBody from "./ModelAddUsersTBody";

export default function ModelAddUsers({
  handleCloseModel,
  selectedUser,
  handleAdd,
  handleEdit,
}) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const validationSchema = Yup.object({
    userImage: Yup.mixed().required("صورة المستخدم مطلوبة"),
    userName: Yup.string().required("اسم المستخدم مطلوب"),
    role: Yup.string().required("نوع المستخدم مطلوب"),
    phone: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9]{10,}$/, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("image", values.userImage);
    formData.append("name", values.userName);
    formData.append("role", values.role);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("password", values.password);

    if (selectedUser) {
      handleEdit(formData, selectedUser.id);
    } else {
      handleAdd(formData);
    }

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      userImage: null,
      imagePreview: selectedUser?.userImage || "",
      userName: selectedUser?.userName || "",
      role: selectedUser?.role || "",
      phone: selectedUser?.phone || "",
      email: selectedUser?.email || "",
      password: selectedUser?.password || "",
    },
    // validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      formik.setFieldError("userImage", "يرجى اختيار ملف صورة صحيح");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      formik.setFieldError(
        "userImage",
        "حجم الملف كبير جداً (الحد الأقصى 5 ميجابايت)"
      );
      return;
    }

    setUploading(true);
    formik.setFieldError("userImage", "");

    const reader = new FileReader();
    reader.onload = (e) => {
      formik.setFieldValue("userImage", file);
      formik.setFieldValue("imagePreview", e.target?.result);
      setUploading(false);
    };
    reader.onerror = () => {
      formik.setFieldError("userImage", "خطأ في قراءة الملف");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    formik.setFieldValue("userImage", null);
    formik.setFieldValue("imagePreview", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-8 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-card rounded-2xl p-2 overflow-hidden">
            <table className="w-full border-separate border-spacing-y-6">
              <thead>
                <tr>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-r-[6px]">
                    صورة المستخدم
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    اسم المستخدم
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    نوع المستخدم
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    رقم الهاتف
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    البريد الإلكتروني
                  </th>
                  <th className="px-4 text-center text-white font-normal text-sm bg-secondary h-[45px]">
                    كلمة المرور
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

              <ModelAddUsersTBody
                formik={formik}
                uploading={uploading}
                fileInputRef={fileInputRef}
                handleFileSelect={handleFileSelect}
                removeImage={removeImage}
                handleCloseModel={handleCloseModel}
                selectedUser={selectedUser}
              />
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
