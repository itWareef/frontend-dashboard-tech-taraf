// icon imports
import AddIcon from "@/assets/Icons/AddIcon.svg";

//Shadcn imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// react imoprts
import { useState } from "react";

// yup shcema imports
import {
  AddOfferTermSchema,
  initialValues,
} from "@/lib/YupSchemas/OffersTermsPage/AddTermSchema";

// formik imports
import { useFormik } from "formik";
import { svgIcons } from "@/components/shared/svgIcons";

//==================================================================

const ModelContent = ({ setIsOpen, setData, data }) => {
  //----------------------------------------------------------

  const handleSubmitFunc = (values) => {
    // add the new user input into the data array
    setData([
      ...data,
      {
        id: Math.random(10),
        term: values.term,
        category: values.category,
        unit: values.unit,
        price: values.price,
      },
    ]);

    setIsOpen(false);

    // send formData to backend here
  };

  //----------------------------------------------------------
  // formik
  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues,
    validationSchema: AddOfferTermSchema,
    onSubmit: handleSubmitFunc,
  });

  //----------------------------------------------------------

  return (
    <div className="absolute inset-0 bg-white z-50 w-full h-full flex flex-col ">
      {/* //========================================================== */}
      <div className="w-full z-50 flex flex-col justify-center gap-3 py-5 px-20 ">
        <h1 className="text-5xl font-bold">اضافة بند</h1>
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
            اضف بند جديد
          </h1>

          <form
            className="flex flex-col items-center gap-5 p-10 w-full"
            onSubmit={handleSubmit}
          >
            {/* ===== Inputs ===== */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-1">
                <Input
                  name="term"
                  placeholder="البند"
                  value={values.term}
                  onChange={handleChange}
                  className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
                />
                {errors.term && touched.term && (
                  <div className="text-red-500 text-sm">{errors.term}</div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Input
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  placeholder="الصنف"
                  className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
                />
                {errors.category && touched.category && (
                  <div className="text-red-500 text-sm">{errors.category}</div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Input
                  name="unit"
                  value={values.unit}
                  onChange={handleChange}
                  placeholder="الوحدة"
                  className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
                />
                {errors.unit && touched.unit && (
                  <div className="text-red-500 text-sm">{errors.unit}</div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Input
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  placeholder="السعر"
                  type="number"
                  className="!bg-[#ededed] !text-2xl !py-6 placeholder:text-[3aaaaaa] !focus:outline-none !border-none
                !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]
                "
                />
                {errors.price && touched.price && (
                  <div className="text-red-500 text-sm">{errors.price}</div>
                )}
              </div>
            </div>

            {/* ===== Buttons ===== */}
            <div className="flex gap-10 items-center">
              <Button
                type="submit"
                className="px-7 py-7  md:px-15 md:py-7 bg-[#038d7d] text-2xl active:scale-95 active:bg-[#026c5f] transition duration-150 ease-in-out"
              >
                تأكيد
              </Button>
              <Button
                type="button"
                className="px-7 py-7  md:px-15 md:py-7 bg-gray-500 text-2xl active:scale-95 active:bg-gray-600 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                الغاء
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

//======================================================

const AddOfferTermModal = ({ setData, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer z-[49]"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddIcon} className="size-7" alt="plus-icon" />
      </div>
      {isOpen && (
        <ModelContent setIsOpen={setIsOpen} setData={setData} data={data} />
      )}
    </>
  );
};

export default AddOfferTermModal;
