import imgSvg from "../../../../public/Icons/taraf.svg";

const StatCard = ({ title, subtitle }) => {
  return (
    <div className=" bg-red-400  mt-10">
      <div className="flex items-center justify-between bg-popover ">
        <div className=" text-white font-bold  px-4 py-2 text-sm h-8 flex items-center justify-center  rounded-l whitespace-nowrap">
          {title}
        </div>

        <div className=" bg-chart-1   relative text-primary px-4 py-2 text-sm h-8 flex items-center justify-center  whitespace-nowrap">
          <div className="bg-chart-1  translate-x-1 absolute right-0  px-1 py-2 text-sm h-8 flex items-center justify-center w-2 skew-x-[13deg]"></div>
          <img
            className="translate-x-6 absolute skew-x-[-10deg] right-0 h-8 w-10"
            src={imgSvg}
            alt=""
          />
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
