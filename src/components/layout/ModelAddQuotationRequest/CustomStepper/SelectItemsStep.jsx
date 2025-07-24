import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { svgIcons } from "@/svgIcons";
("use client");

const OfferConditions = [
  {
    name: "دفعة واحدة سنويًا",
    value: "1",
  },
  {
    name: "دفعتين في السنة",
    value: "2",
  },
  {
    name: "أربع دفعات في السنة",
    value: "4",
  },
];
function SelectItemsStep() {
  return (
    <div className="">
      <h4 className="text-primary font-semibold text-2xl mb-2">اختر البنود</h4>

      <table className="w-full bg-card p-2 rounded-2xl border-separate border-spacing-y-6">
        <thead>
          <tr>
            <th className="px-4 text-bold  text-center text-white text-xl  bg-secondary h-[45px] rounded-r-[6px] ">
              البند{" "}
            </th>
            <th className="px-4 text-bold  text-center text-white text-xl  bg-secondary h-[45px] ">
              الصنف{" "}
            </th>
            <th className="px-4 text-bold  text-center text-white text-xl  bg-secondary h-[45px] ">
              الكميه{" "}
            </th>
            <th className="px-4 text-bold  text-center text-white text-xl  bg-secondary h-[45px] ">
              الوحده{" "}
            </th>

            <th className="px-4 text-bold  text-center text-white text-xl  bg-secondary h-[45px] rounded-l-[6px] ">
              السعر{" "}
            </th>
            <th className="w-[160px] ps-4   ">
              <span className="py-3 text-center block w-full text-white text-xl  bg-secondary rounded-[6px]">
                العمليات
              </span>
            </th>
          </tr>
        </thead>
        <tbody className=" ">
          <tr className="">
            <td className=" bg-[#C8CCCC] px-4 border-l-[1px] rounded-r-[6px] h-[40px] text-xl border-secondary ">
              <Select dir="rtl">
                <SelectTrigger className="my-2 w-full py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-0 shadow-none text-primary">
                  <SelectValue placeholder="اختر بند" />
                </SelectTrigger>
                <SelectContent>
                  {OfferConditions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </td>

            <td className="bg-[#C8CCCC]   px-4 h-[40px] border-l-[1px] border-secondary ">
              <Select dir="rtl">
                <SelectTrigger className="my-2 w-full py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-0 shadow-none text-primary">
                  <SelectValue placeholder="اختر صنف" />
                </SelectTrigger>
                <SelectContent>
                  {OfferConditions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </td>

            <td className="bg-[#C8CCCC]   px-4 h-[40px] border-l-[1px] border-secondary ">
              <Select dir="rtl">
                <SelectTrigger className="my-2 w-full py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-0 shadow-none text-primary">
                  <SelectValue placeholder="اختر كميه" />
                </SelectTrigger>
                <SelectContent>
                  {OfferConditions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </td>
            <td className="bg-[#C8CCCC]   px-4 h-[40px] border-l-[1px] border-secondary ">
              <Select dir="rtl">
                <SelectTrigger className="my-2 w-full py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-0 shadow-none text-primary">
                  <SelectValue placeholder="اختر وحده" />
                </SelectTrigger>
                <SelectContent>
                  {OfferConditions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </td>
            <td className="bg-[#C8CCCC] rounded-l-[6px]   px-4 h-[40px] border-l-[1px] border-secondary ">
              <Select dir="rtl">
                <SelectTrigger className="my-2 w-full py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-0 shadow-none text-primary">
                  <SelectValue placeholder="اختر سعر" />
                </SelectTrigger>
                <SelectContent>
                  {OfferConditions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </td>
            <td className="w-[160px] ps-2 h-[40px]">
              <div className="rounded-[6px]  bg-[#C8CCCC] text-primary h-full   px-4 transition-colors duration-200">
                <button
                  className="flex items-center cursor-pointer gap-5 h-full w-full text-[27px] justify-center"
                  aria-label="Cancel"
                >
                  {svgIcons.delete}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="my-4  mx-2 text-center flex items-center gap-2 bg-secondary text-xl font-bold min-h-[30px] px-3 py-2 rounded text-white hover:bg-secondary/80 transition-all duration-300">
        + اضف بند
      </button>
    </div>
  );
}

export default SelectItemsStep;
