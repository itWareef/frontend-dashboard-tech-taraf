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

// icons imports
import AddRecipientIcon from "@/assets/Icons/AddRecipientIcon.svg";

//============================================================

const ModelContent = ({ setIsOpen, setTableData }) => {
  //------------------------------------------------
  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "product_requests"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: [
                  ...tab.table.rows,
                  {
                    id: Math.random(),
                    order_number: values.order_number,
                    recipient_name: values.name,
                    number: values.phone,
                    date: values.date,
                    shipping_details: values.details,
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
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-lg bg-transparent z-50 w-full h-full">
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
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                    !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2), inset_0_1px_2px_rgba(0,0,0,0.15)]
                    "
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
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
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
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4 bg-[#ededed] px-4 py-3 rounded-2xl border text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]">
                    <label
                      htmlFor="date"
                      className="text-[#aaaaaa] whitespace-nowrap w-[120px]"
                    >
                      تاريخ استلام الطلب
                    </label>

                    <Field
                      id="date"
                      name="date"
                      type="date"
                      as="input"
                      className="flex-1 bg-transparent text-2xl outline-none border-none focus:ring-0"
                      placeholder="تاريخ الاستلام"
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
                    className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
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

const AddNewRecipientModal = ({ setTableData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddRecipientIcon} className="size-7" />
      </div>
      {isOpen && (
        <ModelContent setIsOpen={setIsOpen} setTableData={setTableData} />
      )}
    </>
  );
};

export default AddNewRecipientModal;
