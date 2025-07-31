// Svg Icons import
import { svgIcons } from "@/components/shared/svgIcons";
import AddRequestEyeIcon from "@/assets/Icons/AddRequestEyeIcon.svg";

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

// react imports
import { useState } from "react";

// modals imports
import EditCategoryModal from "./Modals/Edit/EditCategoryModal";
import EditTypeModel from "./Modals/Edit/EditTypeModal";
import EditPromotionalPostModel from "./Modals/Edit/EditPromotionalPostModal";
import EditRecipientModal from "./Modals/Edit/EditRecipientModal";
import EditPaymentModel from "./Modals/Edit/EditPaymentModal";
import EditDiscountCouponModal from "./Modals/Edit/EditDiscountCouponModal";
import EditFeatureModel from "./Modals/Edit/EditFeatureModal";

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
      <td className="px-2 py-0 border-r w-[150px] border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <div className="flex items-center justify-center h-full py-3 cursor-pointer">
          {svgIcons.list}
        </div>
      </td>
    );
  } else if (tabName === "coupons") {
    return (
      <td className="px-5 py-3 w-[200px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
        <Select dir="rtl">
          <SelectTrigger
            iconClass={"text-primary  opacity-100"}
            className="w-full py-5 bg-secondary text-white border-0  font-bold"
          >
            <SelectValue placeholder="حالة الفاتورة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="لم يتم السداد">لم يتم السداد</SelectItem>
              <SelectItem value="تم السداد">تم السداد</SelectItem>
              <SelectItem value="تم رفض المعامله">تم رفض المعامله</SelectItem>
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
        <td className="px-2 py-0 border-r w-[150px] border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <div className="flex items-center justify-center h-full py-3 cursor-pointer">
            <img src={AddRequestEyeIcon} alt="eye icon" />
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
        <td className="w-10 px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <div className="flex items-center justify-center h-full py-3 cursor-pointer">
            {svgIcons.list}
          </div>
        </td>
        <td className="px-5 py-3 w-[200px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
          <Select dir="rtl">
            <SelectTrigger
              iconClass={"text-primary  opacity-100"}
              className="w-full py-5 bg-secondary text-white border-0  font-bold"
            >
              <SelectValue placeholder="حالة الفاتورة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="لم يتم السداد">لم يتم السداد</SelectItem>
                <SelectItem value="تم السداد">تم السداد</SelectItem>
                <SelectItem value="تم رفض المعامله">تم رفض المعامله</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </td>
      </>
    );
  }
};

//======================================================================

const GenericTableStore = ({
  headCells = [],
  rows = [],
  tabName,
  setTableData,
  tableData,
}) => {
  // states manegment
  const [selectedRow, setSelectedRow] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //-----------------------------------------------------------

  // // delete function
  const handleDelete = (deletedRow) => {
    const table = tableData.find((tab) => tab.value === tabName);
    const updatedRows = table.table.rows.filter(
      (row) => row.id !== deletedRow.id
    );
    const updatedTable = {
      ...table,
      table: { ...table.table, rows: updatedRows },
    };
    setTableData((prev) =>
      prev.map((tab) => (tab.value === tabName ? updatedTable : tab))
    );
  };

  //-----------------------------------------------------------

  // edit function
  const ModalsRenderingEdit = ({ tabName, setTableData }) => {
    if (tabName === "coupons") {
      return (
        <EditDiscountCouponModal
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "items") {
      return (
        <EditCategoryModal
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "features") {
      return (
        <EditFeatureModel
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "types") {
      return (
        <EditTypeModel
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "promotional_posts") {
      return (
        <EditPromotionalPostModel
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "product_requests") {
      return (
        <EditRecipientModal
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    } else if (tabName === "payments") {
      return (
        <EditPaymentModel
          setTableData={setTableData}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedRow={selectedRow}
          tableData={tableData}
        />
      );
    }
  };

  //-----------------------------------------------------------
  return (
    <>
      <table className="w-max min-w-full border-separate border-spacing-y-6">
        <thead className="sticky top-0 z-10">
          <tr>
            {headCells.map((cell, index) => {
              const isLast = index === headCells.length - 1;
              return isLast ? (
                <th
                  key={index}
                  className="w-[160px] ps-4 align-top sticky top-0 z-10 bg-transparent"
                >
                  <span className="py-3 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
                    {cell}
                  </span>
                </th>
              ) : (
                <th
                  key={index}
                  className={`${
                    index === 0
                      ? "rounded-r-md"
                      : index === headCells.length - 2
                      ? "rounded-l-md"
                      : ""
                  } min-w-[150px] px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary whitespace-nowrap sticky top-0 z-10 `}
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
              {Object.entries(row).map(([key, value], cellIndex) =>
                key !== "id" &&
                key !== "content" &&
                !(tabName === "types" && key === "category") ? (
                  <td
                    key={cellIndex}
                    className={`${
                      cellIndex === 0 && "rounded-r-lg"
                    } min-w-[150px] px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200`}
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
                ) : null
              )}

              {/* dynamic rendered columns */}

              {CellsRendering(tabName)}

              {/* //================================================= */}

              {tabName !== "product_requests" && (
                <td className="w-[200px]">
                  <div className="flex border-r-[1px] border-secondary rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
                    <button
                      className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                      aria-label="تعديل"
                      onClick={() => {
                        setSelectedRow(row);
                        setIsOpen(true);
                      }}
                    >
                      {svgIcons.update}
                    </button>
                    <button
                      className="flex-1 cursor-pointer py-5 relative flex justify-center items-center"
                      aria-label="حذف"
                      onClick={() => handleDelete(row)}
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

      <ModalsRenderingEdit tabName={tabName} setTableData={setTableData} />
    </>
  );
};

export default GenericTableStore;

//======================================================================
