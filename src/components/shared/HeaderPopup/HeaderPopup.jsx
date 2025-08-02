import { svgIcons } from "@/components/shared/svgIcons";
import { useNavigate } from "react-router-dom";

const HeaderPopup = ({ PageName, icon, action }) => {
  const navigate = useNavigate();

  return (
    <div className="flex sticky top-0 pb-2 z-40 items-center justify-between px-5 pt-5 bg-background">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {icon && <img src={icon} alt="icon" className="w-7 h-7" />}
          <h2 className="text-primary font-bold text-2xl md:text-[40px] flex items-center gap-2">
            {PageName}
          </h2>
        </div>
        <button
          onClick={action ? () => action() : () => navigate(-1)}
          className="mt-2 cursor-pointer flex items-center justify-center rounded gap-2 bg-secondary text-xl font-bold min-h-[30px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
        >
          <img src={svgIcons.returnIcon} alt="return" />
          <span className="pb-2">رجوع</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderPopup;
