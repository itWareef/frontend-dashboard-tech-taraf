import { svgIcons } from "@/svgIcons";
import React from "react";

const SuppliersTBody = ({ suppliers }) => {
  return (
    <tbody>
      {suppliers.map((supplier, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px]">
            {supplier.supplierName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supplier.supplierNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supplier.supplierEmail}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supplier.supplierTaxNumber}
          </td>

          <td className=" py-0 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>
              <button
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
                aria-label="حذف"
              >
                {svgIcons.delete}
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SuppliersTBody;
