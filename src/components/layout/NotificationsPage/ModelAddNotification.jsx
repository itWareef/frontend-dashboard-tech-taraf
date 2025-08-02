import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { svgIcons } from "@/components/shared/svgIcons";
const ModelAddNotification = ({
  newItem,
  handleNewItemChange,
  handleNewItemCheckboxChange,
  closeModal,
  handleAddItemConfirm,
  targetAudience,
}) => {
  return (
    <div className="p-8 backdrop-blur-lg   fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen">
      <div className=" w-full gap-4 p-10   shadow-lg  space-y-4 text-white bg-[#013B41]  md:w-[60%] rounded-2xl">
        <div className="space-y-3">
          <input
            id="title"
            value={newItem.title}
            placeholder="العنوان"
            onChange={(e) => handleNewItemChange("title", e.target.value)}
            className="w-full bg-[#05525A] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
            style={{
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>

        <div className="space-y-3">
          <textarea
            id="content"
            placeholder="اكتب المحتوي المطلوب"
            value={newItem.content}
            onChange={(e) => handleNewItemChange("content", e.target.value)}
            className="w-full h-24 bg-[#05525A] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
            style={{
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>

        {/* Target Audience */}
        <div
          className=" flex items-center  bg-[#05525A] text-muted rounded-md p-3"
          style={{
            boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-center gap-3 px-2 py-2   ">
            <img src={svgIcons.udateUser} className="w-6 h-6" alt="" />
            <h4>فئة الجمهور المستهدفه</h4>
          </div>
          {/* Target Audience */}
          <div className="grid place-items-center grid-cols-4 gap-4 ">
            {targetAudience.map((checkItem) => (
              <div key={checkItem.value} className="flex items-center gap-2">
                <Checkbox
                  className={"bg-white"}
                  id={`modal-${checkItem.value}`}
                  checked={newItem.targetAudience[checkItem.value] || false}
                  onCheckedChange={() =>
                    handleNewItemCheckboxChange(checkItem.value)
                  }
                />
                <Label htmlFor={`modal-${checkItem.value}`}>
                  {checkItem.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Time & Date */}
        <div
          className=" flex items-center gap-5  bg-[#05525A] rounded-md "
          style={{
            boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-center gap-3 px-2 py-4 text-muted ">
            <img src={svgIcons.time} className="w-6 h-6" alt="" />
            <h4>الوقت المستهدف</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Time */}
            <div className="flex items-center gap-2 ">
              <Label htmlFor="date" className={"text-muted"}>
                التاريخ
              </Label>
              <input
                id="date"
                type="date"
                value={newItem.date}
                onChange={(e) => handleNewItemChange("date", e.target.value)}
                className="w-full p-2 text-muted rounded border-0"
              />
            </div>
            {/* data */}
            <div className="flex items-center  gap-2">
              <Label htmlFor="time" className={"text-muted"}>
                الوقت
              </Label>
              <input
                id="time"
                type="time"
                value={newItem.time}
                onChange={(e) => handleNewItemChange("time", e.target.value)}
                className="w-full p-2 text-muted rounded border-0 "
              />
            </div>
          </div>
        </div>
        {/* Action */}
        <div className=" flex justify-center gap-4">
          <button
            onClick={handleAddItemConfirm}
            className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
          >
            تأكيد
          </button>
          <button
            onClick={closeModal}
            className="h-[45px] w-[120px] disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelAddNotification;
