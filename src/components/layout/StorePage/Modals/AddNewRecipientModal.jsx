// react imports
import { useState } from "react";

// shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup schema imports
import {
  AddNewRecipientSchema,
  initialValues,
} from "@/lib/YupSchemas/StorePage/AddNewRecipientSchema";

//============================================================

const ModelContent = ({ setIsOpen }) => {
  //------------------------------------------------
  const handleSubmit = (values) => {
    console.log("Submitting recipient data:", values);
  };

  //------------------------------------------------

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-2xl bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[65%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          اضف مستلم جديد
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={AddNewRecipientSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ---- Inputs ---- */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Field
                    name="order_number"
                    type="number"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[#aaaaaa]"
                    as={Input}
                    placeholder="رقم الطلب"
                  />
                  <ErrorMessage
                    name="order_number"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="phone"
                    type="number"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[#aaaaaa]"
                    as={Input}
                    placeholder="رقم التواصل"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Field
                    name="name"
                    as={Input}
                    placeholder="اسم المستلم"
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[#aaaaaa]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className=" bg-[#ededed] text-xl px-4 rounded-2xl placeholder:text-[#aaaaaa] flex items-center border">
                    <p className="flex-1/2 text-[#aaaaaa]">
                      تاريخ استلام الطلب
                    </p>
                    <Field
                      name="date"
                      as={Input}
                      type="date"
                      className="!bg-transparent !border-none !outline-none !text-lg !py-6  placeholder:text-[#aaaaaa]"
                      placeholder="تاريخ استلام الطلب"
                    />
                  </div>

                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-4 col-span-2 row-span-2 h-[100px]">
                  <Field
                    name="details"
                    as={Input}
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[#aaaaaa] h-full"
                    placeholder="تفاصيل الشحن"
                  />
                  <ErrorMessage
                    name="details"
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

const AddNewRecipientModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src="public/Icons/AddRecipientIcon.svg" className="size-7" />
      </div>
      {isOpen && <ModelContent setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddNewRecipientModal;
