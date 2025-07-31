// ShadCn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// yup schema imports
import { AddDiscountCouponSchema } from "@/lib/YupSchemas/StorePage/AddDiscountCouponSchema";

// icons imports
import { svgIcons } from "@/components/shared/svgIcons";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// function
import { formatDateForInput } from "@/lib/utils";

//==========================================================================

const ModelContent = ({ setTableData, selectedRow, setIsOpen }) => {
  const initialValues = {
    code: selectedRow?.discount_code,
    discount_percentage: selectedRow?.discount_percentage,
    start_date: formatDateForInput(selectedRow?.start_date),
    end_date: formatDateForInput(selectedRow?.end_date),
    type_permission: selectedRow?.user_authority,
  };

  //-------------------------------------------------------
  // submit function
  const handleSubmit = (values) => {
    setTableData((prev) =>
      prev.map((tab) =>
        tab.value === "coupons"
          ? {
              ...tab,
              table: {
                ...tab.table,
                rows: tab.table.rows.map((row) =>
                  row.id === selectedRow.id
                    ? {
                        ...row,
                        discount_code: values.code,
                        discount_percentage: values.discount_percentage,
                        start_date: formatDateForInput(values.start_date),
                        end_date: formatDateForInput(values.end_date),
                        user_authority: values.type_permission,
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

  //-------------------------------------------------------

  return (
    <div className="absolute inset-0 backdrop-blur-md z-50 w-full h-full flex flex-col overflow-y-auto ">
      <div>
        {/* //========================================================== */}
        <div className="w-full z-50 flex flex-col justify-center gap-3 py-5 px-20 ">
          <h1 className="text-5xl font-bold">تعديل كوبون الخصم</h1>
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
              تعديل كوبون الخصم
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={AddDiscountCouponSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form className="flex flex-col items-center gap-5 p-10 w-full">
                  {/* ---- Inputs ---- */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <Field
                        name="code"
                        as={Input}
                        value={values.code}
                        placeholder="كود الخصم"
                        className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                        !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                        "
                      />
                      <ErrorMessage
                        name="code"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-4 bg-[#ededed] px-4 py-3 rounded-2xl border text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]">
                        <label
                          htmlFor="start_date"
                          className="text-[#aaaaaa] whitespace-nowrap w-[120px]"
                        >
                          تاريخ البدء
                        </label>

                        <Field
                          id="start_date"
                          name="start_date"
                          value={values.start_date}
                          type="date"
                          as="input"
                          className="flex-1 bg-transparent text-2xl outline-none border-none focus:ring-0"
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
                        value={values.discount_percentage}
                        as={Input}
                        placeholder="نسبة الخصم"
                        className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                        !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                        "
                      />
                      <ErrorMessage
                        name="discount_percentage"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-4 bg-[#ededed] px-4 py-3 rounded-2xl border text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]">
                        <label
                          htmlFor="end_date"
                          className="text-[#aaaaaa] whitespace-nowrap w-[120px]"
                        >
                          تاريخ النهاية
                        </label>

                        <Field
                          id="end_date"
                          value={values.end_date}
                          placeholder={values.end_date}
                          name="end_date"
                          type="date"
                          as="input"
                          className="flex-1 bg-transparent text-2xl outline-none border-none focus:ring-0"
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
                        value={values.type_permission}
                        as={Input}
                        placeholder="صلاحية الخصم"
                        className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                        !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                        "
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
      </div>
    </div>
  );
};

//======================================================

const EditDiscountCouponModal = ({
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

export default EditDiscountCouponModal;
