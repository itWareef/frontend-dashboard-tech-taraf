// Svg Icons import
import { svgIcons } from "@/components/shared/svgIcons";
import { Link } from "react-router-dom";

//======================================================================

const SubmittingEntitiesTable = ({ headCells = [], rows = [], tabName }) => {
  return (
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
                {/* Keep separate look for the last header cell */}
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
            {Object.entries(row).map(([key, value], cellIndex) => (
              <td
                key={cellIndex}
                className={`${
                  cellIndex === 0 && "rounded-r-lg"
                } min-w-[150px] px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200`}
              >
                <div>{value}</div>
              </td>
            ))}

            {/* Action column */}
            <td className="w-[160px]">
              <div className="flex border-r-[1px] border-secondary rounded-l-lg bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
                {tabName === "individuals" ? (
                  <button
                    className="flex-1 cursor-pointer py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                    aria-label="العروض"
                  >
                    <Link to="/offer-price">{svgIcons.list}</Link>
                  </button>
                ) : (
                  <button
                    className="flex-1 cursor-pointer py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                    aria-label="العروض"
                  >
                    {svgIcons.list}
                  </button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmittingEntitiesTable;

//======================================================================
