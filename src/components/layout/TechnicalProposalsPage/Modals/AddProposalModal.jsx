// icon imports
import AddIcon from "@/assets/Icons/AddIcon.svg";
import AttachmentIcon from "@/assets/Icons/AttachmentIcon.svg";

//Shadcn imports
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// react imoprts
import { useState } from "react";

// formik imports
import { svgIcons } from "@/components/shared/svgIcons";

//==================================================================

const ModelContent = ({ setIsOpen, setTableData, tableData }) => {
  const [data, setData] = useState({
    entity: "customer",
    customer: "",
    file: null,
  });
  const [errors, setErrors] = useState({
    entityError: "",
    customerError: "",
    fileError: "",
  });
  //----------------------------------------------------------

  const handleSubmit = () => {
    if (!data.entity) {
      setErrors((prev) => ({ ...prev, entityError: "الاختيار مطلوب" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, entityError: "" }));
    }

    if (!data.customer) {
      setErrors((prev) => ({ ...prev, customerError: "الاسم مطلوب" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, customerError: "" }));
    }

    if (!data.file) {
      setErrors((prev) => ({ ...prev, fileError: "الصورة مطلوبة" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, fileError: "" }));
    }

    setTableData([
      ...tableData,
      {
        id: Math.random(),
        offer_number: 5824,
        name: data.customer,
        start_date: new Date().toLocaleDateString("ar-EG-u-nu-latn"),
      },
    ]);

    setIsOpen(false);
    // back end integration HERE
  };

  const handleFileChange = (event) => {
    setData({ ...data, file: event.target.files[0] });
  };

  //----------------------------------------------------------

  return (
    <div className="absolute inset-0 bg-white z-50 w-full h-full flex flex-col overflow-y-auto ">
      <div>
        {/* //========================================================== */}
        <div className="w-full z-50 flex flex-col justify-center gap-3 py-5 px-20 ">
          <h1 className="text-5xl font-bold">اضافة عرض فني</h1>
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
              اضف عرض فني
            </h1>

            <div className="flex flex-col items-center gap-20 p-10 w-full">
              {/* ===== Inputs ===== */}
              <div className="w-full h-full flex flex-col gap-10">
                <div className="flex flex-wrap gap-10">
                  <label className="font-bold text-2xl w-full md:w-[150px] text-start md:text-right">
                    الجهة الموجهة
                  </label>
                  <div className="flex flex-wrap items-center gap-6 md:gap-10 w-full">
                    <div className="flex flex-wrap items-center justify-start md:justify-start gap-6 md:gap-10 w-full">
                      {["customer", "organizations"].map((entityName) => (
                        <Button
                          key={entityName}
                          className="px-7 py-7 md:px-15 md:py-7 bg-[#038d7d] text-2xl active:scale-95 active:bg-[#026c5f] transition duration-150 ease-in-out shadow-lg"
                          style={{
                            backgroundColor: `${
                              data.entity !== entityName ? "white" : "#038d7d"
                            }`,
                            color:
                              data.entity !== entityName ? "#013b41" : "white",
                          }}
                          onClick={() =>
                            setData({ ...data, entity: entityName })
                          }
                        >
                          {entityName === "customer" ? "عميل" : "شركات"}
                        </Button>
                      ))}
                      {errors.entityError && (
                        <span className="text-red-500 w-full">
                          {errors.entityError}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 md:gap-10 w-full">
                  <label className="font-bold text-2xl w-full md:w-[150px] text-start md:text-right">
                    اختر العميل
                  </label>
                  <Select
                    dir="rtl"
                    onValueChange={(value) =>
                      setData({ ...data, customer: value })
                    }
                  >
                    <SelectTrigger
                      iconClass={"text-primary opacity-100"}
                      className="w-full md:w-[300px] !bg-[#ededed] !text-2xl !py-6 placeholder:text-[#aaaaaa] !focus:outline-none !border-none
      !shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.15)]"
                    >
                      <SelectValue placeholder="ابحث عن العميل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="احمد علي">احمد علي</SelectItem>
                        <SelectItem value="اسلام عادل">اسلام عادل</SelectItem>
                        <SelectItem value="عبد الله محمد">
                          عبد الله محمد
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.customerError && (
                    <span className="text-red-500 text-[20px]">
                      {errors.customerError}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-10">
                  <label className="font-bold text-2xl w-[150px]">
                    ارفق الملف
                  </label>
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center "
                  >
                    <img
                      src={AttachmentIcon}
                      className="w-10 h-10"
                      alt="attachments"
                    />
                    <p>{data.file ? data.file.name : "لا يوجد ملف مرفق"}</p>
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                    multiple={false}
                  />
                  {errors.fileError && (
                    <span className="text-red-500 text-[20px]">
                      {errors.fileError}
                    </span>
                  )}
                </div>
              </div>

              {/* ===== Buttons ===== */}
              <div className="flex gap-10 items-center">
                <Button
                  onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//======================================================

const AddProposalModal = ({ tableData, setTableData }) => {
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
        <ModelContent
          setIsOpen={setIsOpen}
          setTableData={setTableData}
          tableData={tableData}
        />
      )}
    </>
  );
};

export default AddProposalModal;
