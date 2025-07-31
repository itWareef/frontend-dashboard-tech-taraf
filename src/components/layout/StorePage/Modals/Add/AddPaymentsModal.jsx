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

// icons imports
import AddPaymentsIcon from "@/assets/Icons/AddPaymentsIcon.svg";
import { svgIcons } from "@/components/shared/svgIcons";
import AddImageIcon from "@/assets/Icons/AddImageIcon.svg";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

//=================================================================

const ModelContent = ({ setIsOpen, setTableData }) => {
  //------------------------------------------------
  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "payments"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: [
                  ...tab.table.rows,
                  {
                    id: Math.random(),
                    customer_name: values.name,
                    number: values.phone_number,
                    invoice_value: values.bill,
                    invoice_details: values.bill_details,
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
    <div className="absolute inset-0 backdrop-blur-md z-50 w-full h-full flex flex-col">
      {/* //========================================================== */}
      <div className="w-full z-50 flex flex-col justify-center gap-3 py-5 px-20 ">
        <h1 className="text-5xl font-bold">اضافة مدفوعات</h1>
        <button
          className="mt-2 cursor-pointer flex items-center justify-center rounded gap-2 bg-secondary text-xl font-bold min-h-[15px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <img src={svgIcons.returnIcon} alt="return" />
          <span className="pb-2">رجوع</span>
        </button>
      </div>
      {/* //========================================================== */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center w-[65%] max-w-[1100px] bg-white shadow-2xl text-2xl rounded-2xl overflow-hidden">
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
                    <Field
                      name="phone_number"
                      as={Input}
                      type="number"
                      placeholder="رقم الهاتف"
                      className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                      !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                      "
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
                      className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                      !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                      "
                    />
                    <ErrorMessage
                      name="bill"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      name="bill_details"
                      as={Input}
                      placeholder="تفاصيل الفاتورة"
                      type="text"
                      className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                      !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                      "
                    />
                    <ErrorMessage
                      name="bill_details"
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
                      <img src={AddImageIcon} className="w-15 h-15" />
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
    </div>
  );
};

//======================================================

const AddPaymentModel = ({ setTableData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer z-[49]"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddPaymentsIcon} className="size-7" alt="payment icon" />
      </div>
      {isOpen && (
        <ModelContent setIsOpen={setIsOpen} setTableData={setTableData} />
      )}
    </>
  );
};

export default AddPaymentModel;
