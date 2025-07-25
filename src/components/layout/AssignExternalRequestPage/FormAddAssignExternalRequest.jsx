import { svgIcons } from "@/svgIcons";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const clients = [
  { id: 1, name: "أحمد علي" },
  { id: 2, name: "منى حسن" },
  { id: 3, name: "سعيد محمد" },
];

const chooseSupervisorOptions = [
  { name: "عبدالرحمن علي", value: "supervisor-1" },
  { name: "سالم محمد", value: "supervisor-2" },
  { name: "فاطمة الزهراء", value: "supervisor-3" },
];
const FormAddAssignExternalRequest = () => {
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedSupervisor, setSelectedSupervisor] = useState("");

  return (
    <form>
      <div className=" rounded-2xl p-2 flex  gap-3 border-3 border-muted ">
        <table className="flex-1 border-separate border-spacing-y-3 ">
          <thead>
            <tr>
              <th className="px-4  text-center h-[60px]    text-white font-normal  text-xl bg-secondary rounded-r-[6px]">
                اسم العميل
              </th>
              <th className="px-4  text-center h-[60px]    text-white font-normal  text-xl bg-secondary">
                بيانات الوحده
              </th>
              <th className="px-4  text-center h-[60px]    text-white font-normal  text-xl bg-secondary">
                قيمه الطلب{" "}
              </th>
              <th className="px-4  text-center h-[60px]    text-white font-normal  text-xl bg-secondary">
                ملاحظات{" "}
              </th>
              <th className="px-4   text-center h-[60px]    text-white font-normal  text-xl bg-secondary rounded-l-[6px]">
                مرفقات{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="group">
              <td className="px-2 py-2 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px] ">
                <Select dir="rtl" onValueChange={setSelectedClient}>
                  <SelectTrigger className=" w-full bg-muted  py-5  border-none text-xl  data-[placeholder]:text-primary [&_svg:not([class*='text-'])]:text-primary">
                    <SelectValue
                      className={"text-primary"}
                      placeholder="اختر طلب"
                    />
                  </SelectTrigger>
                  <SelectContent className={"w-[250px] whitespace-nowrap"}>
                    {clients.map((client) => (
                      <SelectItem
                        className={" text-wrap text-sm"}
                        key={client.id}
                        value={client.name}
                      >
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="px-2 py-2 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200  ">
                <Select dir="rtl" onValueChange={setSelectedClient}>
                  <SelectTrigger className=" w-full bg-muted  py-5  border-none text-xl  data-[placeholder]:text-primary [&_svg:not([class*='text-'])]:text-primary">
                    <SelectValue
                      className={"text-primary"}
                      placeholder="اختر وجده"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map((client) => (
                      <SelectItem
                        className={" text-wrap text-sm"}
                        key={client.id}
                        value={client.name}
                      >
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="px-2 py-2 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                3000
              </td>
              <td className="px-2 py-2 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                <input
                  type="text"
                  placeholder="ملاحظات"
                  className="bg-muted  py-2 border-none rounded-[6px] px-2 text-primary text-xl "
                />
              </td>

              <td className="px-2 py-2 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
                icons
              </td>
            </tr>
          </tbody>
        </table>

        <table className=" w-[30%] border-spacing-x-3 border-separate border-spacing-y-3">
          <thead>
            <tr className="">
              <th className="px-4   text-center h-[60px] flex items-center justify-center   text-white font-normal    py-2  text-xl bg-secondary rounded-[6px]">
                اداره المهام{" "}
              </th>

              <th className="px-4   text-center    text-white font-normal    py-2  text-xl bg-secondary rounded-[6px]">
                <button
                  type="submit"
                  className=" text-center gap-3 h-full flex items-center justify-center w-full text-white font-normal text-xl bg-secondary rounded-[6px]"
                >
                  {svgIcons.saveIcon}
                  حفظ
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="group">
              <td className="px-2    py-2 text-center text-primary bg-popover text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-[6px]">
                <Select dir="rtl" onValueChange={selectedSupervisor}>
                  <SelectTrigger className=" w-full shadow-none  py-5  border-none text-xl  data-[placeholder]:text-muted [&_svg:not([class*='text-'])]:text-muted ">
                    <SelectValue
                      className={"text-primary"}
                      placeholder="اختر وجده"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {chooseSupervisorOptions.map((option) => (
                      <SelectItem
                        className={" text-wrap text-sm"}
                        key={option.value}
                        value={option.name}
                      >
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>

              <td className="px-2  py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-[6px]">
                <button
                  type="submit"
                  className=" text-center gap-3   flex items-center justify-center w-full text-primary font-normal text-2xl  rounded-[6px]"
                >
                  {svgIcons.cancelIcon}
                  الغاء
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default FormAddAssignExternalRequest;
