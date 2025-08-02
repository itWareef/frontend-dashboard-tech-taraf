import React from "react";

const TableTH = ({ headers, children }) => {
  return (
    <thead className="sticky top-0 z-10 bg-card">
      <tr>
        {headers.map((header, index) => {
          const isFirst = index === 0;

          const isLast = index === headers.length - 1;

          return (
            <th
              key={header.key}
              className="text-center text-white font-normal text-xl h-12 pb-4"
            >
              <span
                className={`
                  bg-secondary hover:bg-secondary/80
                  grid place-content-center h-12
                  ${isFirst && "rounded-r-[6px]"}
                  ${isLast && "rounded-l-[6px]"}
                `}
              >
                {header.label}
              </span>
            </th>
          );
        })}

        {children && (
          <th className="text-center text-white font-normal text-xl ps-2 h-12 pb-4">
            <span className="bg-secondary hover:bg-secondary/80 rounded-l-[6px] rounded-r-[6px] h-12 grid place-content-center">
              {children}
            </span>
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableTH;
