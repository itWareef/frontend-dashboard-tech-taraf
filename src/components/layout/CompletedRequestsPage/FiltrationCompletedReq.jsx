import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { completedRequestIcons } from "./completedRequestIcons";
const chooseSupervisorOptions = [
  { name: "عبدالرحمن علي", value: "supervisor-1" },
  { name: "سالم محمد", value: "supervisor-2" },
  { name: "فاطمة الزهراء", value: "supervisor-3" },
];
const FiltrationCompletedReq = () => {
  const [, setSelectedSupervisor] = useState("");

  return (
    <div className="flex items-center justify-between pb-3 border-b border-b-muted">
      <div className="flex  gap-10  ">
        <Select dir="rtl" onValueChange={setSelectedSupervisor}>
          <SelectTrigger
            iconClass={"text-primary opacity-100"}
            className={cn(
              "my-2 w-full py-2 border-0 shadow-none text-primary  "
            )}
          >
            <SelectValue placeholder="اختر مشرع" />
          </SelectTrigger>
          <SelectContent>
            {chooseSupervisorOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select dir="rtl" onValueChange={setSelectedSupervisor}>
          <SelectTrigger
            iconClass={"text-primary opacity-100"}
            className={cn(
              "my-2 w-full py-2 border-0 shadow-none text-primary data-[placeholder]:text-primary "
            )}
          >
            <SelectValue placeholder="اختر بند" />
          </SelectTrigger>
          <SelectContent>
            {chooseSupervisorOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select dir="rtl" onValueChange={setSelectedSupervisor}>
          <SelectTrigger
            iconClass={"text-primary opacity-100"}
            className={cn(
              "my-2 w-full py-2 border-0 shadow-none text-primary  "
            )}
          >
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
        <Select dir="rtl" onValueChange={setSelectedSupervisor}>
          <SelectTrigger
            iconClass={"text-primary opacity-100"}
            className={cn(
              "my-2 w-full py-2 border-0 shadow-none text-primary  "
            )}
          >
            <SelectValue placeholder="اختر عميل" />
          </SelectTrigger>
          <SelectContent>
            {chooseSupervisorOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-3 w-[360px]">
        {completedRequestIcons.filterIcon}
        <div className="relative">
          <span className="absolute transform -translate-x-1/2 translate-y-1/2">
            {completedRequestIcons.search}
          </span>

          <Input
            id="search"
            name="search"
            type="text"
            placeholder="بحث"
            className="pr-10 w-[308px] h-[40px] text-2xl bg-input border-secondary placeholder:text-xl placeholder:text-muted"
          />
        </div>
      </div>
    </div>
  );
};

export default FiltrationCompletedReq;
