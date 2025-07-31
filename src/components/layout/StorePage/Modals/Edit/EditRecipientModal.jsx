// shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup schema imports
import { AddNewRecipientSchema } from "@/lib/YupSchemas/StorePage/AddNewRecipientSchema";

// functions imports
import { formatDateForInput } from "@/lib/utils";

//============================================================

const ModelContent = ({ setTableData, selectedRow, setIsOpen }) => {
  //------------------------------------------------
  const initialValues = {
    order_number: selectedRow?.order_number,
    name: selectedRow?.recipient_name,
    phone: selectedRow?.number,
    date: formatDateForInput(selectedRow?.date),
    details: selectedRow?.shipping_details,
  };
  //------------------------------------------------

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
                        order_number: values.order_number,
                        recipient_name: values.name,
                        date: values.date,
                        shipping_details: values.details,
                        number: values.phone,
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

  //------------------------------------------------

  return (
    <div className="flex items-center justify-center absolute inset-0 backdrop-blur-lg bg-transparent z-50 w-full h-full">
      <div className="flex flex-col items-center w-[65%] bg-white text-2xl rounded-2xl overflow-hidden">
        <h1 className="bg-[#038d7d] text-white w-full py-5 text-center">
          تعديل المستلم
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={AddNewRecipientSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className="flex flex-col items-center gap-5 p-10 w-full">
              {/* ---- Inputs ---- */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Field
                    name="order_number"
                    value={values.order_number}
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
                    value={values.phone}
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
                    value={values.name}
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
                      value={values.date}
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
                    value={values.details}
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

const EditRecipientModal = ({
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

export default EditRecipientModal;
