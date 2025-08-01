// react imports
import { useState } from "react";

// Shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// schema imports
import {
  AddNewFeatureSchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddNewFeatureSchema";

// icons imports
import AddIcon from "@/assets/Icons/AddIcon.svg";
import addImageIcon from "@/assets/Icons/AddImageIcon.svg";

//=========================================================

const ModelContent = ({ setIsOpen, setTableData }) => {
  //------------------------------------------------
  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "features"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: [
                  ...tab.table.rows,
                  {
                    id: Math.random(),
                    icon: URL.createObjectURL(values.picture),
                    description: values.description,
                    advantage_term: values.name,
                  },
                ],
              },
            }
          : tab
      )
    );
    setIsOpen(false);
  };

  //------------------------------------------------
  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[45%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          اضف ميزة جديده
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={AddNewFeatureSchema}
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
                    placeholder="اسم الميزة"
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
                    name="description"
                    as={Input}
                    placeholder="الوصف"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* ---- File Upload ---- */}
              <div className="flex gap-5 items-center">
                <label
                  htmlFor="addNewImage"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <p>اضف ايقونة</p>
                  <img
                    src={addImageIcon}
                    alt="addImageIcon"
                    className="w-15 h-15"
                  />
                </label>

                <input
                  id="addNewImage"
                  name="icon"
                  type="file"
                  accept="image/*"
                  multiple
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

const AddNewFeature = ({ setTableData }) => {
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

export default AddNewFeature;
