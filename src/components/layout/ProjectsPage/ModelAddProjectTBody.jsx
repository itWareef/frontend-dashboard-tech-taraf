import { svgIcons } from "@/svgIcons";

export default function ModelAddProjectTBody({ formik, handleCloseModel }) {
  return (
    <tbody className="">
      <tr className="h-[60px]">
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="projectName"
            name="projectName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectName}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="developerName"
            name="developerName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.developerName}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="neighborhood"
            name="neighborhood"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.neighborhood}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="unitNum"
            name="unitNum"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unitNum}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        <td className="w-[160px] ps-3 h-[40px]">
          <div className="rounded-[6px]  text-primary h-full bg-[#C8CCCC] transition-colors duration-200">
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
  );
}
