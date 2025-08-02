import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import React from "react";

const ModelAddSuppliers = (handleModelSuppliers) => {
  return (
    <section className=" fixed top-0 left-0 right-0 bottom-0 z-50 min-h-screen bg-background">
      <HeaderPopup PageName={"اضافة مورد"} action={handleModelSuppliers} />

      <div className="container mx-auto  flex justify-center mt-20 ">
        <div className="bg-white w-full sm:max-w-[800px]  rounded shadow-lg overflow-hidden">
          {/* Head */}
          <div className="bg-secondary py-4">
            <h2 className="text-center text-xl md:text-3xl font-bold text-white">
              اضافة مورد
            </h2>
          </div>

          {/* Body */}
          <div className="py-5 px-6 ">
            <form action="">
              {/* Main Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="اسم المورد"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder="رقم التواصل"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder=" البريد الالكتروني"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <input
                  type="text"
                  placeholder="رقم السجل التجاري"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold drop-shadow-lg rounded-md  py-3 px-3 shadow"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Btn */}
              <div className=" flex justify-center gap-4 mt-6">
                <button
                  onClick={handleModelSuppliers}
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

export default ModelAddSuppliers;
