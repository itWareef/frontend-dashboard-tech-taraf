import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { svgIcons } from "@/svgIcons";
import { useNavigate } from "react-router-dom";

const Header = ({ PageName, returnState = false, children, option = true }) => {
  const { handleLogout, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    handleLogout();
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className="flex sticky top-0 pb-2 z-40 items-center justify-between px-4 sm:px-5 pt-3 sm:pt-5 flex-wrap gap-3">
      {/* الجزء الأيسر */}
      <div className="flex flex-col gap-2">
        <h2 className="text-primary font-bold text-xl sm:text-2xl md:text-[40px] flex items-center gap-2">
          {PageName}
        </h2>

        {returnState && (
          <button
            onClick={() => navigate(-1)}
            className="mt-2 cursor-pointer flex items-center justify-center rounded gap-2 bg-secondary text-xl font-bold min-h-[30px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
          >
            <img src={svgIcons.returnIcon} alt="return" />

            <span className="pb-2">رجوع</span>
          </button>
        )}
      </div>

      {/* الجزء الأيمن */}

      {option == true && (
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <IconButton icon={svgIcons.chatIcon} alt="chat" />
          <IconButton icon={svgIcons.fullScreenIcon} alt="fullScreen" />

          <NotificationIcon count={3} icon={svgIcons.notificationsIcon} />

          <div className="flex items-center gap-1">
            <Button
              onClick={handleLogOut}
              variant="ghost"
              className="text-muted font-bold text-sm sm:text-2xl hover:text-secondary hover:bg-transparent"
            >
              تسجيل الخروج
            </Button>
            <img src={svgIcons.logoutIcon} alt="logout" className="w-8 h-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

const IconButton = ({ icon, alt }) => (
  <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
    <img src={icon} alt={alt} className="w-4 h-4 sm:w-8 sm:h-8" />
  </button>
);

const NotificationIcon = ({ count, icon }) => (
  <div className="relative">
    {count > 0 && (
      <span className="absolute -top-1 -left-1 bg-destructive text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
        {count}
      </span>
    )}
    <IconButton icon={icon} alt="notification" />
  </div>
);
