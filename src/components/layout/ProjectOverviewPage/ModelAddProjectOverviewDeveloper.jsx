import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import { svgIcons } from "@/components/shared/svgIcons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ModelAddProjectOverviewDeveloper({
  handleCloseModelDeveloepr,
}) {
  return (
    <section className="px-8 fixed top-0 left-0 right-0 bottom-0 z-50 overflow-x-auto min-h-screen bg-background">
      <HeaderPopup
        PageName={"اضافة مشروع"}
        action={handleCloseModelDeveloepr}
      />
      <div className="container mx-auto  flex justify-center mt-20 ">
        <div className="bg-white w-full sm:w-[80%]   rounded shadow-lg overflow-hidden">
          {/* Head */}
          <div className="bg-secondary py-4">
            <h2 className="text-center text-xl md:text-3xl font-bold text-white">
              اضافة مشروع جديد
            </h2>
          </div>

          {/* Form Container */}
          <div className="  p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project Name */}
              <div>
                <input
                  type="text"
                  placeholder="اسم المطور"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Project Description */}
              <div>
                <input
                  placeholder=" عدد المشاريع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Number of Units */}
              <div>
                <input
                  placeholder=" عدد الوحدات"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Highest Area */}
              <div className="relative">
                <input
                  placeholder="مساحة الأراضي"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 font-medium">
                  م2
                </span>
              </div>

              {/* Lowest Area */}
            </div>
            <div className="relative mt-5">
              <input
                placeholder="مسطحات البناء "
                className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 font-medium">
                م
              </span>
            </div>

            {/* Upload Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="">
                <input type="file" id="file" hidden />
                <label htmlFor="file" className="flex items-center gap-5">
                  <img
                    className="cursor-pointer w-16 h-16"
                    src={svgIcons.fileUpload}
                    alt=""
                  />
                  اضف الشعار الأول{" "}
                </label>
              </div>

              <div className="">
                <input type="file" id="file" hidden />
                <label htmlFor="file" className="flex items-center gap-5">
                  <img
                    className="cursor-pointer w-16 h-16"
                    src={svgIcons.fileUpload}
                    alt=""
                  />
                  اضف الشعار الثاني{" "}
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className=" flex justify-center gap-4 mt-5">
              <button className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80">
                تأكيد
              </button>
              <button
                onClick={handleCloseModelDeveloepr}
                className="h-[45px] w-[120px]  disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
