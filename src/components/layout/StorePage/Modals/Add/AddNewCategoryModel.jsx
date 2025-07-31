//Shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// react imoprts
import { useState } from "react";

// yup shcema imports
import {
  AddNewCategorySchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddNewCategorySchema";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// icons imports
import AddIcon from "@/assets/Icons/AddIcon.svg";
import addImageIcon from "@/assets/Icons/AddImageIcon.svg";

//==================================================================

const ModelContent = ({ setIsOpen, setTableData }) => {
  //----------------------------------------------------------
  // submission form

  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "items"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: [
                  ...tab.table.rows,
                  {
                    id: Math.random(), // or Date.now()
                    mainImg: URL.createObjectURL(values.picture),
                    otherImg: URL.createObjectURL(values.picture2),
                    categoryName: values.name,
                    description: values.description,
                    terms: values.section_id,
                    advantages: values.features,
                    price: values.price,
                  },
                ],
              },
            }
          : tab
      )
    );
    setIsOpen(false); // assuming you're closing a modal
  };

  // send formData to backend here

  //----------------------------------------------------------

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[65%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          اضف صنف جديد
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={AddNewCategorySchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ===== Inputs ===== */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Field
                    name="name"
                    as={Input}
                    placeholder="اسم الصنف"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="section_id"
                    as={Input}
                    placeholder="البند"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="section_id"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="features"
                    as={Input}
                    placeholder="الميزة"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="features"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="price"
                    as={Input}
                    placeholder="السعر"
                    type="number"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm "
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <Field
                    name="description"
                    as={Input}
                    placeholder="الوصف"
                    className="h-full !bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* ===== Image Inputs ===== */}
              <div className="flex gap-30 items-center">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="mainImage"
                    className="cursor-pointer flex gap-2"
                  >
                    <p>اضف الصورة الرئيسية</p>
                    <img src={addImageIcon} className="w-15 h-15" />
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    id="mainImage"
                    accept="image/*"
                    onChange={(e) =>
                      setFieldValue("picture", e.currentTarget.files[0])
                    }
                  />
                  {errors.picture && touched.picture && (
                    <div className="text-red-500 text-sm">{errors.picture}</div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="moreImages"
                    className="cursor-pointer flex gap-2"
                  >
                    <p>اضف صور اخرى</p>
                    <img src={addImageIcon} className="w-15 h-15" />
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    id="moreImages"
                    accept="image/*"
                    multiple={false}
                    onChange={(e) =>
                      setFieldValue("picture2", e.currentTarget.files[0])
                    }
                  />
                  {errors.picture2 && touched.picture2 && (
                    <div className="text-red-500 text-sm">
                      {errors.picture2}
                    </div>
                  )}
                </div>
              </div>

              {/* ===== Buttons ===== */}
              <div className="flex gap-10 items-center">
                <Button
                  type="submit"
                  className="px-10 py-7 bg-[#038d7d] text-2xl active:scale-95 active:bg-[#026c5f] transition duration-150 ease-in-out"
                >
                  تأكيد
                </Button>
                <Button
                  type="button"
                  className="px-10 py-7 bg-gray-500 text-2xl active:scale-95 active:bg-gray-600 transition duration-150 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  الغاء
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

//======================================================

const AddNewCategoryModel = ({ setTableData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddIcon} className="size-7" />
      </div>
      {isOpen && (
        <ModelContent setIsOpen={setIsOpen} setTableData={setTableData} />
      )}
    </>
  );
};

export default AddNewCategoryModel;
