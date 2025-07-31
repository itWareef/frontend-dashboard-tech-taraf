// ShadCn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// React & Formik imports
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Yup schema
import {
  AddPromotionalPostSchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddPromotionalPostSchema";

// icons import
import AddRecipientIcon from "@/assets/Icons/AddRecipientIcon.svg";
import addImageIcon from "@/assets/Icons/AddImageIcon.svg";

//==========================================================================

const ModelContent = ({ setTableData, setIsOpen }) => {
  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "promotional_posts"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: [
                  ...tab.table.rows,
                  {
                    id: Math.random(),
                    image: URL.createObjectURL(values.picture),
                    name: values.name,
                  },
                ],
              },
            }
          : tab
      )
    );
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[45%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          انشئ منشور دعائي
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={AddPromotionalPostSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ---- Inputs ---- */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col">
                  <Field
                    name="name"
                    as={Input}
                    placeholder="اسم المنشور التوضيحي"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    name="content"
                    as={Input}
                    placeholder="المحتوى"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* ---- File Upload ---- */}
              <div className="flex gap-5 items-center">
                <label
                  htmlFor="add image"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <p>اضف صورة</p>
                  <img
                    src={addImageIcon}
                    alt="add image"
                    className="w-15 h-15"
                  />
                </label>

                <input
                  id="add image"
                  name="picture"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  className="hidden"
                  onChange={(event) =>
                    setFieldValue("picture", event.currentTarget.files[0])
                  }
                />

                <p className="text-sm">ايقونة مقاس 58×85</p>
              </div>
              {errors.picture && touched.picture && (
                <div className="text-red-500 text-sm">{errors.picture}</div>
              )}

              {/* ---- Buttons ---- */}
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

const AddPromotionalPostModel = ({ setTableData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddRecipientIcon} className="size-7" alt="add recipient" />
      </div>
      {isOpen && (
        <ModelContent setIsOpen={setIsOpen} setTableData={setTableData} />
      )}
    </>
  );
};

export default AddPromotionalPostModel;
