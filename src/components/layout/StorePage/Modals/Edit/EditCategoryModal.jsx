//Shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// yup shcema imports
import { AddNewCategorySchema } from "@/lib/YupSchemas/StorePage/AddNewCategorySchema";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// icons imports
import addImageIcon from "@/assets/Icons/AddImageIcon.svg";

//==================================================================

const ModelContent = ({ setTableData, selectedRow, setIsOpen }) => {
  const initialValues = {
    name: selectedRow?.categoryName,
    section_id: selectedRow?.terms,
    features: "ميزه جديده",
    price: selectedRow?.price,
    description: selectedRow?.description,
    picture: selectedRow?.mainImg,
    picture2: selectedRow?.otherImg,
  };
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
                rows: tab.table.rows.map((row) =>
                  row.id === selectedRow.id
                    ? {
                        ...row,
                        id: Math.random(),
                        mainImg:
                          values.picture == selectedRow.mainImg
                            ? row.mainImg
                            : URL.createObjectURL(values.picture),
                        otherImg:
                          values.picture2 == selectedRow.otherImg
                            ? row.otherImg
                            : URL.createObjectURL(values.picture2),
                        categoryName: values.name,
                        description: values.description,
                        terms: values.section_id,
                        advantages: values.features,
                        price: values.price,
                      }
                    : row
                ),
              },
            }
          : tab
      )
    );
    setIsOpen(false);
  };
  // send formData to backend here

  //----------------------------------------------------------

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[65%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          تعديل صنف حالي
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={AddNewCategorySchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched, values }) => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ===== Inputs ===== */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Field
                    name="name"
                    as={Input}
                    placeholder={values.name}
                    value={values.name}
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
                    placeholder={values.section_id}
                    value={values.section_id}
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
                    placeholder={values.features}
                    value={values.features}
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
                    placeholder={values.price}
                    value={values.price}
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
                    placeholder={values.description}
                    value={values.description}
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

const EditCategoryModal = ({
  setTableData,
  selectedRow,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      {isOpen && (
        <ModelContent
          setIsOpen={setIsOpen}
          setTableData={setTableData}
          selectedRow={selectedRow}
        />
      )}
    </>
  );
};

export default EditCategoryModal;
