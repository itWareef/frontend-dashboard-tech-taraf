import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ PageName, returnState = false }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-5 pt-5 rounded-2xl">
      <div>
        <h2 className="text-primary font-bold text-2xl md:text-[40px]">
          {PageName}
        </h2>
        {returnState && (
          <Button
            onClick={() => navigate(-1)}
            className="mt-2 cursor-pointer flex items-center gap-2 bg-secondary text-xl font-bold h-[30px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.448"
              height="21.407"
              viewBox="0 0 21.448 21.407"
            >
              <path
                id="Icon_akar-arrow-back-thick-fill"
                data-name="Icon akar-arrow-back-thick-fill"
                d="M14.189,2.473a.973.973,0,0,1,1.742-.6l6.811,8.757a.973.973,0,0,1,0,1.195l-6.811,8.757a.973.973,0,0,1-1.742-.6V16.1c-5.234.109-7.748,1.1-9.011,2.182a5.262,5.262,0,0,0-1.649,3.5l-.059.326a.973.973,0,0,1-1.928-.119A17.742,17.742,0,0,1,3.514,12.2C5.347,9.058,8.649,6.639,14.189,6.386Z"
                transform="translate(-1.499 -1.499)"
                fill="#fff"
              />
            </svg>
            رجوع
          </Button>
        )}
      </div>
      <Link
        to="/"
        className="text-muted flex gap-2 hover:text-secondary transition-all duration-300"
      >
        تسجيل الخروج
        <svg
          width="27"
          height="27"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 1.5H25.5C27.1569 1.5 28.5 2.84315 28.5 4.5V25.5C28.5 27.1569 27.1569 28.5 25.5 28.5H19.5M9 7.5L1.5 15M1.5 15L9 22.5M1.5 15H19.5"
            stroke="#1C7E68"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Header;
