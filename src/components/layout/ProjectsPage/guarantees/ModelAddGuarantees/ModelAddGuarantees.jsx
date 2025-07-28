import React from "react";
import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";

const ModelAddGuarantees = ({ handleModelGuarantees }) => {
  return (
    <section className="p-8 backdrop-blur-xl fixed top-0 left-0 right-0 bottom-0 z-50 min-h-screen bg-white/50">
      <HeaderPopup PageName={"اضافة ضمان"} action={handleModelGuarantees} />

      <div className="container mx-auto  flex justify-center mt-20 ">
        <div className="bg-white w-full sm:max-w-[800px]  rounded shadow-lg overflow-hidden">
          {/* Head */}
          <div className="bg-secondary py-4">
            <h2 className="text-center text-xl md:text-3xl font-bold text-white">
              اضافة ضمان
            </h2>
          </div>

          {/* Body */}
          <div className="py-5 px-6 ">
            <form action="">
              {/* Main Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="اسم الضمان"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder="المدة"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder="المورد"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder="عدد المشاريع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              {/* Input Icon */}
              <div className=" mt-3">
                <input type="file" id="file" hidden />
                <label htmlFor="file" className="flex items-center gap-5">
                  <img
                    className="cursor-pointer w-16 h-16"
                    src="/Icons/file-upload.svg"
                    alt=""
                  />
                  ايقون الضمان
                </label>
              </div>
              {/* Btn */}
              <div className=" flex justify-center gap-4">
                <button
                  onClick={handleModelGuarantees}
                  className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
                >
                  تأكيد
                </button>
                <button className="h-[45px] w-[120px]  disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80">
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelAddGuarantees;
