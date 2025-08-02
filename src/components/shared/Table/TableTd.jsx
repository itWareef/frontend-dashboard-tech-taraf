import React from "react";

const tdClasses =
  " text-center text-primary text-sm font-medium whitespace-nowrap transition-colors duration-200 ";
const spanClasses =
  " bg-[#C8CCCC] mb-4 hover:bg-[#B8BCBC] h-14 grid place-content-center";

const actionClasses = " bg-[#C8CCCC]   h-14 flex justify-center ";
const TableTd = ({ content, children, options, classes }) => {
  return (
    <td className={`${tdClasses} `}>
      <div
        className={`${spanClasses} ${classes} ${
          options?.roundedR ? "rounded-r-[6px]" : ""
        } ${options?.roundedL ? "rounded-l-[6px]" : ""} `}
      >
        {content && content}
        {children && children}
      </div>
    </td>
  );
};

export default TableTd;

export const TableTdActions = ({ children, classes }) => {
  return (
    <td className={`  ${tdClasses} `}>
      <div className={`${actionClasses} ${classes} rounded-l-[6px] mb-4  `}>
        {children}
      </div>
    </td>
  );
};
