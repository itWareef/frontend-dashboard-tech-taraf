import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const HeaderDefaultLayout = () => {
  const navigate = useNavigate();
  return (
    <header className="my-10">
      <h1
        style={{ letterSpacing: "5px" }}
        className="text-2xl  font-bold mb-4 text-primary flex gap-5 items-center"
      >
        <svg
          width="36"
          height="47"
          viewBox="0 0 36 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.137 11.1719C14.6214 11.1719 11.7715 14.0218 11.7715 17.5374C11.7715 21.053 14.6214 23.9029 18.137 23.9029C21.6526 23.9029 24.5025 21.053 24.5025 17.5374C24.4985 14.0235 21.6509 11.1759 18.137 11.1719ZM18.137 20.7202C16.3792 20.7202 14.9542 19.2952 14.9542 17.5374C14.9542 15.7796 16.3792 14.3546 18.137 14.3546C19.8948 14.3546 21.3198 15.7796 21.3198 17.5374C21.3177 19.2943 19.894 20.7181 18.137 20.7202Z"
            fill="#038D7D"
          />
          <path
            d="M30.3676 5.29612C24.1036 -0.966327 14.1211 -1.48528 7.24142 4.09387C0.361768 9.67303 -1.19202 19.5475 3.64179 26.9698L15.6674 45.4311C16.2111 46.2658 17.1397 46.7691 18.1357 46.7691C19.1318 46.7691 20.0604 46.2658 20.6041 45.4311L32.6301 26.9698C37.0932 20.1185 36.1495 11.078 30.3676 5.29612ZM29.9633 25.2325L18.1358 43.3892L6.30815 25.2325C2.68776 19.6747 3.46426 12.237 8.15445 7.54663C13.667 2.03398 22.6046 2.03399 28.1171 7.54664C32.8073 12.237 33.5837 19.6747 29.9633 25.2325Z"
            fill="#038D7D"
          />
        </svg>
        تتبع المشرفين
      </h1>
      <Button
        onClick={() => navigate(-1)}
        className="mt-2 ms-2 cursor-pointer flex items-center gap-2 bg-secondary text-xl font-bold min-h-[30px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.448"
          height="20.407"
          viewBox="0 0 20.448 20.407"
        >
          <path
            id="Icon_akar-arrow-back-thick-fill"
            data-name="Icon akar-arrow-back-thick-fill"
            d="M14.189,2.473a.973.973,0,0,1,1.742-.6l6.811,8.757a.973.973,0,0,1,0,1.195l-6.811,8.757a.973.973,0,0,1-1.742-.6V16.1c-5.234.109-7.748,1.1-9.011,2.182a5.262,5.262,0,0,0-1.649,3.5l-.059.326a.973.973,0,0,1-1.928-.119A17.742,17.742,0,0,1,3.514,12.2C5.347,9.058,8.649,6.639,14.189,6.386Z"
            transform="translate(-1.499 -1.499)"
            fill="#fff"
          />
        </svg>

        <span className="pb-2"> رجوع</span>
      </Button>
    </header>
  );
};

export default HeaderDefaultLayout;
