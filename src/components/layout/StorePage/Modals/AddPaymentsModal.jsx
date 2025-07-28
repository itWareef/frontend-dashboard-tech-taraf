// ShadCn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// react imports
import { useState } from "react";

// yup schema imports
import {
  AddNewPaymentSchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddPaymentsSchema";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

//=================================================================

const ModelContent = ({ setIsOpen }) => {
  //------------------------------------------------
  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      formData.append(key, val);
    });

    // Send to backend (replace with actual API call)
    formData.entries().forEach(([key, val]) => console.log(key, val));
  };

  //------------------------------------------------

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full ">
      <div className="flex flex-col items-center w-[45%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          اضافة مدفوعات
        </h1>
        {/* //========================================== */}
        <Formik
          initialValues={initialValues}
          validationSchema={AddNewPaymentSchema}
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
                    placeholder="اسم العميل"
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
                    name="phone_number"
                    as={Input}
                    type="number"
                    placeholder="رقم الهاتف"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="phone_number"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="bill"
                    as={Input}
                    placeholder="قيمة الفاتورة"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="bill"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="bill_number"
                    as={Input}
                    placeholder="رقم الفاتورة"
                    type="number"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="bill_number"
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
                    <p>اضف مرفقات</p>
                    <img
                      src="public/Icons/addImageIcon.svg"
                      className="w-15 h-15"
                    />
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    id="mainImage"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                      setFieldValue(
                        "pictures",
                        Array.from(e.currentTarget.files)
                      )
                    }
                  />
                  {errors.pictures && touched.pictures && (
                    <div className="text-red-500 text-sm">
                      {errors.pictures}
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

const AddPaymentModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src="public/Icons/AddPaymentsIcon.svg" className="size-7" />
      </div>
      {isOpen && <ModelContent setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddPaymentModel;
