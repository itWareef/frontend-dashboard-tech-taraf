// Svg Icons import
import { svgIcons } from "@/svgIcons";

// functions imports
import { isImage } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//======================================================================

const CellsRendering = (tabName) => {
  if (tabName === "items") {
    return (
      <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <div className="flex items-center justify-center h-full py-3 cursor-pointer">
          {svgIcons.list}
        </div>
      </td>
    );
  } else if (tabName === "types") {
    return (
      <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <div className="flex items-center justify-center h-full py-3 cursor-pointer">
          {svgIcons.list}
        </div>
      </td>
    );
  } else if (tabName === "coupons") {
    return (
      <td className="px-5 py-3 w-[150px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <Select dir="rtl">
          <SelectTrigger
            iconClass={"text-primary  opacity-100"}
            className="w-full py-5 bg-secondary text-white border-0  font-bold"
          >
            <SelectValue placeholder="حالة الفاتورة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="نشط">نشط</SelectItem>
              <SelectItem value="خامل">خامل</SelectItem>
              <SelectItem value="قيد الاانتظار">قيد الاانتظار</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </td>
    );
  } else if (tabName === "promotional_posts") {
    return (
      <td className="px-5 py-3 w-[150px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <Select dir="rtl">
          <SelectTrigger
            iconClass={"text-primary  opacity-100"}
            className="w-full py-5 bg-secondary text-white border-0  font-bold"
          >
            <SelectValue placeholder="حالة المنشور" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="نشط">نشط</SelectItem>
              <SelectItem value="خامل">خامل</SelectItem>
              <SelectItem value="قيد الاانتظار">قيد الاانتظار</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </td>
    );
  } else if (tabName === "product_requests") {
    return (
      <>
        <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <div className="flex items-center justify-center h-full py-3 cursor-pointer">
            <img src="public/Icons/AddRequestEyeIcon.svg" alt="eye icon" />
          </div>
        </td>
        <td className="px-5 py-3 w-[150px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <Select dir="rtl">
            <SelectTrigger
              iconClass={"text-primary  opacity-100"}
              className="w-full py-5 bg-secondary text-white border-0  font-bold"
            >
              <SelectValue placeholder="حالة الطلب" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="تم">تم</SelectItem>
                <SelectItem value="تم التسليم">تم التسليم</SelectItem>
                <SelectItem value="قيد التسليم">قيد التسليم</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </td>
      </>
    );
  } else if (tabName === "payments") {
    return (
      <>
        <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <div className="flex items-center justify-center h-full py-3 cursor-pointer">
            {svgIcons.list}
          </div>
        </td>
        <td className="px-5 py-3 w-[150px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <Select dir="rtl">
            <SelectTrigger
              iconClass={"text-primary  opacity-100"}
              className="w-full py-5 bg-secondary text-white border-0  font-bold"
            >
              <SelectValue placeholder="حالة الفاتورة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="نشط">نشط</SelectItem>
                <SelectItem value="خامل">خامل</SelectItem>
                <SelectItem value="قيد الاانتظار">قيد الاانتظار</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </td>
      </>
    );
  }
};

//======================================================================

const GenericTable = ({ headCells = [], rows = [], tabName }) => {
  return (
    <table className="w-full border-separate border-spacing-y-6">
      <thead className="sticky top-0 z-10">
        <tr>
          {headCells.map((cell, index) => {
            const isLast = index === headCells.length - 1;
            return isLast ? (
              <th key={index} className="w-[160px] ps-4">
                <span className="py-3 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
                  {cell}
                </span>
              </th>
            ) : (
              <th
                key={index}
                className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary"
              >
                {cell}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="group">
            {Object.entries(row).map(([key, value], cellIndex) => (
              <td
                key={cellIndex}
                className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200"
              >
                {isImage(value) ? (
                  <img
                    src={value}
                    alt="img"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                ) : (
                  <div>{value}</div>
                )}
              </td>
            ))}

            {/* dynamic rendered columns */}

            {CellsRendering(tabName)}

            {/* //================================================= */}

            {tabName !== "product_requests" && (
              <td className="w-[160px]">
                <div className="flex border-r-[1px] border-secondary rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
                  <button
                    // onClick={() => handleEdit(supervisor)}
                    className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                    aria-label="تعديل"
                  >
                    {svgIcons.update}
                  </button>
                  <button
                    // onClick={() => handleDelete(supervisor.id)}
                    className="flex-1 cursor-pointer py-5 relative   flex justify-center items-center"
                    aria-label="حذف"
                  >
                    <div className="absolute right-0 h-full w-[2px] bg-secondary" />
                    {svgIcons.delete}
                  </button>
                </div>
              </td>
            )}

            {/* Optional actions column */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;

//======================================================================
