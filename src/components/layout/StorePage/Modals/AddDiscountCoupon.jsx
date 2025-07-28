// ShadCn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// react imports
import { useState } from "react";

// yup schema imports
import {
  AddDiscountCouponSchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddDiscountCouponSchema";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

//==========================================================================

const ModelContent = ({ setIsOpen }) => {
  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      formData.append(key, val);
    });

    // Send to backend (replace with actual API call)
    formData.entries().forEach(([key, val]) => console.log(key, val));
  };

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[40%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          اضف كوبون الخصم
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={AddDiscountCouponSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ---- Inputs ---- */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Field
                    name="code"
                    as={Input}
                    placeholder="كود الخصم"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="code"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className=" bg-[#ededed] text-xl px-4 rounded-2xl placeholder:text-[3aaaaaa] flex items-center border">
                    <p className="flex-1/2 text-[#aaaaaa]">تاريخ البدء</p>
                    <Field
                      name="start_date"
                      as={Input}
                      type="date"
                      className="!bg-transparent !border-none !outline-none !text-lg !py-6  placeholder:text-[3aaaaaa]"
                      placeholder="تاريخ البدء"
                    />
                  </div>

                  <ErrorMessage
                    name="start_date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="discount_percentage"
                    type="number"
                    max="100"
                    as={Input}
                    placeholder="نسبة الخصم"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="discount_percentage"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className=" bg-[#ededed] text-xl px-4 rounded-2xl placeholder:text-[3aaaaaa] flex items-center border ">
                    <p className="flex-1/2 text-[#aaaaaa]">تاريخ النهاية</p>
                    <Field
                      name="end_date"
                      as={Input}
                      type="date"
                      className="!bg-transparent !border-none !outline-none !text-lg !py-6  placeholder:text-[3aaaaaa]"
                      placeholder="تاريخ النهاية"
                    />
                  </div>

                  <ErrorMessage
                    name="end_date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-4 col-span-2">
                  <Field
                    name="type_permission"
                    as={Input}
                    placeholder="صلاحية الخصم"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa]"
                  />
                  <ErrorMessage
                    name="type_permission"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

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

const AddDiscountCouponModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src="public/Icons/AddCouponIcon.svg" className="size-8 " />
      </div>
      {isOpen && <ModelContent setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddDiscountCouponModel;
