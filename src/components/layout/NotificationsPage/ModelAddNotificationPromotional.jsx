import { svgIcons } from "@/components/shared/svgIcons";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
const targetAudience = [
  { value: "a", label: "الزوار الجدد" },
  { value: "b", label: "العملاء المتعاقدين" },
  { value: "c", label: "العملاء الغير متعاقدين" },
  { value: "d", label: "الفنيين" },
];

const ModelAddNotificationPromotional = ({ handleCloseModel }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8 backdrop-blur-lg   fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className=" w-full   shadow-lg      md:w-[500px] ">
        {/* Head */}
        <div className={" bg-secondary  rounded-tl-[6px] rounded-tr-[6px] "}>
          <h3
            className={
              "text-white py-4 font-bold text-2xl text-center mx-auto flex items-center justify-center gap-2"
            }
          >
            <img src={svgIcons.notificationsIconS} alt="" className="w-6 h-6" />
            انشاء اشعارات دعائيه
          </h3>
        </div>
        {/* ===================== */}
        {/* Body */}
        <div className={"bg-white p-4 space-y-9"}>
          {/* title */}
          <input
            placeholder="العنوان الرئيسي"
            type="text"
            className="w-full bg-[#EDEDED] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
            style={{
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          />
          {/* content */}
          <textarea
            placeholder="اكتب هنا المحتوي المطلوب"
            className="w-full h-24 bg-[#EDEDED] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
            style={{
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          />

          {/* ================================ */}
          <Accordion
            type="single"
            collapsible
            value={open ? "target-audience" : ""}
            onValueChange={(value) => setOpen(!!value)}
          >
            <AccordionItem
              value="target-audience"
              className=" mb-2 rounded-[6px] bg-[#EDEDED]"
              style={{
                boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <AccordionTrigger className="px-4">
                <h3 className="text-primary ">فئة الجمهور المستهدفه</h3>
              </AccordionTrigger>
              <AccordionContent
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-[#EDEDED] p-4 space-y-9"
              >
                {/* targetAudience */}
                <div className="flex flex-col gap-5">
                  {targetAudience.map((targetItem) => (
                    <div
                      key={targetItem.value}
                      className="flex justify-between gap-2 items-center"
                    >
                      <Label
                        htmlFor={`${targetItem.value}`}
                        className="text-primary"
                      >
                        {targetItem.label}
                      </Label>
                      <Checkbox id={`${targetItem.value}`} checked={false} />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* ====================================== */}
          {/* date */}
          <div
            className=" flex flex-col sm:flex-row items-center gap-5 py-4 bg-[#EDEDED] rounded-md "
            style={{
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex items-center gap-3 px-2 text-primary text-lg ">
              <h4>الوقت المستهدف</h4>
            </div>

            {/* Time */}
            <input
              type="time"
              className="p-2 rounded text-primary w-full sm:w-[120px]"
            />

            {/* date */}
            <input
              type="date"
              className="p-2 rounded text-primary w-full sm:w-[120px]"
            />
          </div>

          {/* ====================================== */}

          <div className=" flex justify-center gap-4">
            <button
              onClick={handleCloseModel}
              className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
            >
              تأكيد
            </button>
            <button
              onClick={handleCloseModel}
              className="h-[45px] w-[120px] disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAddNotificationPromotional;
