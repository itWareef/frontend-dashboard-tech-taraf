import { svgIcons } from "@/components/shared/svgIcons";

export default function ModelAddContractTBody({ formik, handleCloseModel }) {
  return (
    <>
      <tbody>
        <tr className="h-[60px] gap-0">
          {/* Client Name */}
          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="clientName"
              name="clientName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.clientName}
              className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
              placeholder="......"
            />
          </td>

          {/* Project */}
          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="project"
              name="project"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.project}
              className="placeholder:text-center placeholder:text-primary h-full w-full text-center border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
              placeholder="......"
            />
          </td>

          {/* Unit Number */}
          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="unitNumber"
              name="unitNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unitNumber}
              className="placeholder:text-center placeholder:text-primary h-full w-full text-center border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
              placeholder="......"
            />
          </td>

          {/* Maintenance Start */}
          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="maintenanceStart"
              name="maintenanceStart"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maintenanceStart}
              className="placeholder:text-center px-2  placeholder:text-primary h-full w-full text-center border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            />
          </td>

          {/* Maintenance End */}
          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="maintenanceEnd"
              name="maintenanceEnd"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maintenanceEnd}
              className="placeholder:text-center px-2 placeholder:text-primary h-full w-full text-center rounded-l-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            />
          </td>

          <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
            <input
              id="amount"
              name="amount"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.amount}
              className="placeholder:text-center placeholder:text-primary h-full w-full text-center border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
              placeholder="......"
            />
          </td>
          {/* Cancel Button */}
          <td className="w-[160px] ps-3 h-[60px]">
            <div className="rounded-[6px] h-full bg-[#C8CCCC] transition-colors duration-200">
              <button
                onClick={handleCloseModel}
                className="flex items-center cursor-pointer gap-5 h-full w-full text-[27px] justify-center"
                aria-label="Cancel"
              >
                {svgIcons.cancelIcon}
                إلغاء
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
