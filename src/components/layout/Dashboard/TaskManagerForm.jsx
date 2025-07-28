import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { svgIcons } from "@/svgIcons";
import { useState } from "react";

const chooseOrderOptions = [
  { label: "طلب رقم 5783 عمليل رقم 19 وحده 39", value: "order-5783" },
  { label: "طلب رقم 5784 عمليل رقم 20 وحده 40", value: "order-5784" },
  { label: "طلب رقم 5785 عمليل رقم 21 وحده 41", value: "order-5785" },
];

const chooseSupervisorOptions = [
  { name: "عبدالرحمن علي", value: "supervisor-1" },
  { name: "سالم محمد", value: "supervisor-2" },
  { name: "فاطمة الزهراء", value: "supervisor-3" },
];

const TaskManagerForm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedSupervisor, setSelectedSupervisor] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();
    if (selectedOrder && selectedSupervisor) {
      setShowConfirm(true);
    }
  };

  const handleFinalConfirm = () => {
    console.log("handleFinalConfirm");
    console.log("تم الإسناد:", {
      order: selectedOrder,
      supervisor: selectedSupervisor,
    });
    setShowConfirm(!showConfirm);
  };

  const handleCancel = () => setShowConfirm(false);

  return (
    <div className="col-span-2 relative row-span-2 col-start-11 row-start-4 bg-card overflow-hidden rounded-[20px]  ">
      <div className="px-5 pt-6 pb-5">
        <h2 className="text-center text-2xl text-muted md:text-[36px] font-bold">
          إدارة المهام
        </h2>

        <div className="mt-1 flex flex-col items-center justify-center gap-y-5 text-center">
          <img src={svgIcons.pen} className="w-9 h-9" alt="" />
          <h3 className="text-[27px] text-white font-bold">إسناد طلب سريع</h3>
        </div>

        <form onSubmit={handleConfirm} className="">
          <Select dir="rtl" onValueChange={setSelectedOrder}>
            <SelectTrigger className="my-6 w-full py-5 text-muted">
              <SelectValue className={"text-muted"} placeholder="اختر طلب" />
            </SelectTrigger>
            <SelectContent className={"w-[250px] whitespace-nowrap"}>
              {chooseOrderOptions.map((option) => (
                <SelectItem
                  className={" text-wrap text-sm"}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select dir="rtl" onValueChange={setSelectedSupervisor}>
            <SelectTrigger className="my-6 w-full py-5 text-muted">
              <SelectValue className={"text-muted"} placeholder="اختر مشرف" />
            </SelectTrigger>
            <SelectContent>
              {chooseSupervisorOptions.map((option) => (
                <SelectItem
                  className={" text-wrap text-sm"}
                  key={option.value}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-4 flex justify-between gap-4">
            <button
              disabled={!selectedOrder || !selectedSupervisor}
              type="submit"
              className="h-[45px] w-[125px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
            >
              تأكيد
            </button>
            <button
              disabled={!selectedOrder || !selectedSupervisor}
              type="button"
              className="h-[45px] w-[125px]  disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
            >
              إلغاء
            </button>
          </div>
        </form>

        <div
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-y-4 rounded-t-2xl bg-chart-2/20 p-6 backdrop-blur-sm transition-all duration-300 ${
            showConfirm
              ? "translate-y-0 opacity-100 top-0"
              : "translate-y-full opacity-0 "
          }`}
        >
          <img src={svgIcons.warning} alt="" />
          <p className="text-center text-lg md:text-2xl font-bold text-white">
            هل أنت متأكد من إسناد الطلب للمشرف؟
          </p>
          <div className="mt-4 flex justify-between gap-4">
            <button
              onClick={handleFinalConfirm}
              className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
            >
              تأكيد
            </button>
            <button
              onClick={handleCancel}
              className="h-[45px] w-[120px]  disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerForm;
