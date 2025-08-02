import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import { svgIcons } from "@/components/shared/svgIcons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ModelAddProjectOverview({ handleCloseModelProject }) {
  return (
    <section className="px-8 fixed top-0 left-0 right-0 bottom-0 z-50 overflow-x-auto min-h-screen bg-background">
      <HeaderPopup PageName={"اضافة مشروع"} action={handleCloseModelProject} />
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
                  placeholder="اسم المشروع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Project Description */}
              <div>
                <input
                  placeholder="وصف المشروع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Developer */}
              <div>
                <Select dir="rtl">
                  <SelectTrigger
                    style={{
                      boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    className="bg-[#EDEDED] border-0 data-[placeholder]:text-muted py-6 w-full [&_svg:not([class*='text-'])]:text-primary [&_svg:not([class*='text-'])]:size-6 text-white border-secondary  rounded-[6px] px-3 text-2xl font-bold"
                  >
                    <SelectValue placeholder="المطور" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-[#EDEDED] border-0"
                    style={{
                      boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <SelectItem
                      className={"bg-transparent text-muted text-lg font-bold"}
                      value="developer1"
                    >
                      مطور 1
                    </SelectItem>
                    <SelectItem
                      className={"bg-transparent text-muted text-lg font-bold"}
                      value="developer2"
                    >
                      مطور 2
                    </SelectItem>
                  </SelectContent>
                </Select>
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

              {/* Highest Price */}
              <div>
                <input
                  placeholder="  السعر الأعلي"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Lowest Price */}
              <div>
                <input
                  placeholder="  السعر الأدني"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>

              {/* Highest Area */}
              <div className="relative">
                <input
                  placeholder="مساحة الأعلى"
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
              <div className="relative">
                <input
                  placeholder="مساحة الأقل"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 font-medium">
                  م2
                </span>
              </div>

              {/* Profit Percentage */}
              <div className="relative">
                <input
                  placeholder="نسبة البيع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 font-medium">
                  %
                </span>
              </div>

              {/* Project Video Link */}
              <div>
                <input
                  placeholder="رابط فيديو المشروع"
                  className="w-full bg-[#EDEDED] placeholder:text-muted font-bold rounded-md py-3 px-3 text-2xl"
                  style={{
                    boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
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
                  اضف الصوره الرئيسيه{" "}
                </label>
              </div>
              {/* Add Multiple Images */}
              <div className="">
                <input type="file" id="file" hidden />
                <label htmlFor="file" className="flex items-center gap-5">
                  <img
                    className="cursor-pointer w-16 h-16"
                    src={svgIcons.fileUpload}
                    alt=""
                  />
                  اضف عدة صور أخري
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className=" flex justify-center gap-4 mt-5">
              <button className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80">
                تأكيد
              </button>
              <button
                onClick={handleCloseModelProject}
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
