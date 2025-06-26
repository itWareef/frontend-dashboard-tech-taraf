import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";

const chooseOrderOptions = [
  {
    label: "طلب رقم 5783 عمليل رقم 19 وحده 39",
    value: "order-5783",
  },
  {
    label: "طلب رقم 5784 عمليل رقم 20 وحده 40",
    value: "order-5784",
  },
  {
    label: "طلب رقم 5785 عمليل رقم 21 وحده 41",
    value: "order-5785",
  },
];

const chooseSupervisorOptions = [
  {
    name: "عبدالرحمن علي",
    value: "supervisor-1",
  },
  {
    name: "سالم محمد",
    value: "supervisor-2",
  },
  {
    name: "فاطمة الزهراء",
    value: "supervisor-3",
  },
];
const TaskManagerForm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowConfirm(true);
  };

  const handleFinalConfirm = (e) => {
    e.preventDefault();
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };
  return (
    <div className="bg-card max-h-[480px] h-full  w-full rounded-lg p-6 shadow-md relative overflow-hidden">
      <h2 className=" text-2xl md:text-[40px] text-center text-muted">
        إدارة المهام
      </h2>
      <div className="head text-center flex flex-col gap-y-5 items-center justify-center mt-6   ">
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3682 33.6069C13.4817 33.6069 13.5948 33.5962 13.7063 33.5749L22.9544 31.3849L42.5275 11.8117C45.0563 9.28295 45.0562 5.18306 42.5275 2.65434C39.9987 0.125617 35.8988 0.12564 33.3701 2.65439L13.7969 22.2276L11.6221 31.4055L11.6072 31.4748C11.5064 32.0001 11.6453 32.5429 11.9859 32.9553C12.3266 33.3677 12.8334 33.6066 13.3682 33.6069ZM16.7858 23.8955L35.6994 4.98249C36.9421 3.73977 38.9569 3.73977 40.1997 4.98249C41.4424 6.22521 41.4424 8.24006 40.1997 9.48278L21.2862 28.3959L15.3881 29.7936L16.7858 23.8955ZM47.1839 38.1442H2.72749C1.36412 38.1458 0.259279 39.2507 0.25769 40.614L0.257691 48.0234C0.259277 49.3868 1.36412 50.4917 2.72749 50.4932H47.1839C48.5473 50.4917 49.6522 49.3868 49.6537 48.0234V40.614C49.6522 39.2507 48.5473 38.1458 47.1839 38.1442ZM46.3607 47.2002H3.55076V41.4373H46.3607V47.2002Z"
            fill="#1C7E68"
          />
        </svg>
        <h3 className="text-[27px]">اسناد طلب سريع </h3>
      </div>
      <form onSubmit={handleConfirm}>
        <Select dir="rtl">
          <SelectTrigger className="w-full my-6 py-6">
            <SelectValue placeholder="اختر طلب" />
          </SelectTrigger>
          <SelectContent>
            {chooseOrderOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select dir="rtl">
          <SelectTrigger className="w-full my-6 py-6">
            <SelectValue placeholder="اختر مشرف" />
          </SelectTrigger>
          <SelectContent>
            {chooseSupervisorOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex justify-between   gap-4 mt-4">
          <button
            type="submit"
            className={
              "cursor-pointer w-[125px] rounded-lg h-[45px] text-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            }
          >
            تأكيد
          </button>
          <button
            type="button"
            className={
              "cursor-pointer w-[125px] rounded-lg h-[45px] text-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
            }
          >
            الغاء
          </button>
        </div>
      </form>

      <div
        className={`confirm absolute rounded-t-2xl left-0 right-0 bottom-0 transition-all duration-300 ${
          showConfirm
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        } bg-chart-2/20 backdrop-blur-sm flex flex-col items-center justify-center gap-y-4 p-6`}
      >
        <AlertTriangleIcon className="h-30 w-30 text-muted" />
        <p className="text-lg md:text-2xl text-center">
          هل انت متأكدمن اسناء الطلب للمشرف
        </p>
        <div className="flex justify-between   gap-4 mt-4">
          <button
            type="submit"
            className={
              "cursor-pointer w-[125px] rounded-lg h-[45px] text-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            }
            onClick={handleFinalConfirm}
          >
            تأكيد
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className={
              "cursor-pointer w-[125px] rounded-lg h-[45px] text-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
            }
          >
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerForm;
