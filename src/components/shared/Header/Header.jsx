import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 pt-5 rounded-2xl   ">
      <h2 className="text-primary text-2xl md:text-[40px]">لوحة التحكم</h2>
      <Link
        to="/"
        className="text-muted flex gap-2  hover:text-secondary transition-all duration-300"
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
