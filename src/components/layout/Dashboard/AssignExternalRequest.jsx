import { svgIcons } from "@/svgIcons";
import React from "react";

const AssignExternalRequest = () => {
  return (
    <div className="col-span-2 col-start-11 row-start-3 bg-card rounded-[20px] flex justify-between items-center gap-2 px-4 py-5">
      <img src={svgIcons.rectangleList} className="w-8 h-8" alt="" />

      <span className="text-muted text-xl font-bold"> اسناد طلب خارجي</span>
      <img src={svgIcons.arrowLeft} className="w-8 h-8 mt-2" alt="" />
    </div>
  );
};

export default AssignExternalRequest;
