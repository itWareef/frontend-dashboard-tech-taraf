import { NavLink } from "react-router-dom";
import imgProfile from "../../../assets/imgProfile.png";

const menuItems = [
  {
    id: 1,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30.534"
        viewBox="0 0 32 30.534"
      >
        <path
          id="Path_487"
          data-name="Path 487"
          d="M31.7,24.918,16.646,11.451a.423.423,0,0,0-.086-.066.891.891,0,0,0-1.2-.02L.3,24.832a.89.89,0,0,0,1.185,1.33l2.712-2.429v15.7a2.24,2.24,0,0,0,2.238,2.238h4.752a2.1,2.1,0,0,0,2.1-2.1V31.591a.323.323,0,0,1,.323-.323h4.8a.323.323,0,0,1,.323.323v7.984a2.1,2.1,0,0,0,2.1,2.1h4.752a2.544,2.544,0,0,0,2.238-2.8V23.818l2.712,2.429a.895.895,0,0,0,1.257-.072A.906.906,0,0,0,31.7,24.918Zm-5.673,4.39v9.55c0,.638-.316,1.027-.461,1.027H20.819a.323.323,0,0,1-.323-.323v-7.97a2.1,2.1,0,0,0-2.1-2.1H13.6a2.1,2.1,0,0,0-2.1,2.1v7.984a.323.323,0,0,1-.323.323H6.425a.462.462,0,0,1-.461-.461V22.14l9.991-8.925,10.077,9.01v7.082Z"
          transform="translate(0 -11.141)"
          fill="#1c7e68"
        />
      </svg>
    ),
    title: "لوحة التحكم",
  },
  {
    id: 2,
    path: "/map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.458"
        height="32.899"
        viewBox="0 0 24.458 32.899"
      >
        <g
          id="Icon_core-location-pin"
          data-name="Icon core-location-pin"
          transform="translate(-5.626 -1.237)"
        >
          <path
            id="Path_7243"
            data-name="Path 7243"
            d="M17.854,8.971a4.5,4.5,0,1,0,4.5,4.5,4.5,4.5,0,0,0-4.5-4.5Zm0,6.75a2.25,2.25,0,1,1,2.25-2.25,2.25,2.25,0,0,1-2.25,2.25Z"
            fill="#aaa"
          />
          <path
            id="Path_7244"
            data-name="Path 7244"
            d="M26.5,4.817A12.229,12.229,0,0,0,7.608,20.139l8.5,13.051a2.083,2.083,0,0,0,3.49,0l8.5-13.051A12.229,12.229,0,0,0,26.5,4.817Zm-.286,14.094L17.854,31.747,9.493,18.911a9.979,9.979,0,1,1,16.723,0Z"
            fill="#aaa"
          />
        </g>
      </svg>
    ),
    title: "تتبع",
  },

  {
    id: 3,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32.001"
        height="30.113"
        viewBox="0 0 32.001 30.113"
      >
        <path
          id="Icon_fa-solid-store"
          data-name="Icon fa-solid-store"
          d="M32.39,6.1,29.02.77A1.666,1.666,0,0,0,27.615,0H6.63A1.666,1.666,0,0,0,5.224.77L1.848,6.1A4.584,4.584,0,0,0,4.9,13.127a5.784,5.784,0,0,0,.712.047,5.156,5.156,0,0,0,3.835-1.706,5.164,5.164,0,0,0,7.669,0,5.164,5.164,0,0,0,7.669,0,5.166,5.166,0,0,0,3.835,1.706,5.708,5.708,0,0,0,.712-.047A4.579,4.579,0,0,0,32.4,6.1Zm-2.817,8.887h-.006a7.268,7.268,0,0,1-.953.065,7.1,7.1,0,0,1-2.082-.312v7.84H7.712V14.739a7.021,7.021,0,0,1-2.094.318,7.358,7.358,0,0,1-.959-.065H4.654a6.8,6.8,0,0,1-.706-.135V26.349a3.768,3.768,0,0,0,3.764,3.764H26.533A3.768,3.768,0,0,0,30.3,26.349V14.857a5.621,5.621,0,0,1-.723.135Z"
          transform="translate(-1.123)"
          fill="#aaa"
        />
      </svg>
    ),
    title: "المتجر",
  },

  {
    id: 4,
    path: "/contact-requests",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36.341"
        height="29.815"
        viewBox="0 0 36.341 29.815"
      >
        <path
          id="Icon_fa-solid-user-gear"
          data-name="Icon fa-solid-user-gear"
          d="M13.047,0A7.455,7.455,0,1,1,5.591,7.455,7.455,7.455,0,0,1,13.047,0ZM10.385,17.706h5.324a10.833,10.833,0,0,1,2.009.192,2.755,2.755,0,0,0,1.27,2.609,2.726,2.726,0,0,0-1.165,3.1A10.626,10.626,0,0,0,20.2,27.724a2.734,2.734,0,0,0,3.332.507v.052a2.779,2.779,0,0,0,.46,1.532H1.73A1.721,1.721,0,0,1,0,28.091,10.383,10.383,0,0,1,10.385,17.706Zm15.01-5a.865.865,0,0,1,.658-.862,8.524,8.524,0,0,1,3.809,0,.865.865,0,0,1,.658.862v1.782a6.53,6.53,0,0,1,1.3.746l1.45-.833a.872.872,0,0,1,1.078.14,8.645,8.645,0,0,1,1.171,1.584,8.489,8.489,0,0,1,.786,1.806.863.863,0,0,1-.419,1l-1.456.839c.023.233.041.472.041.716a5.841,5.841,0,0,1-.041.716l1.456.839a.87.87,0,0,1,.419,1,9.123,9.123,0,0,1-.786,1.806,8.386,8.386,0,0,1-1.171,1.584.873.873,0,0,1-1.078.14l-1.45-.833a6.37,6.37,0,0,1-1.3.746v1.782a.865.865,0,0,1-.658.862,8.524,8.524,0,0,1-3.809,0,.865.865,0,0,1-.658-.862V26.489a6.216,6.216,0,0,1-1.31-.751l-1.439.833a.872.872,0,0,1-1.078-.14A8.645,8.645,0,0,1,20.4,24.847a8.489,8.489,0,0,1-.786-1.806.863.863,0,0,1,.419-1l1.444-.833c-.023-.239-.041-.478-.041-.722a5.937,5.937,0,0,1,.041-.722l-1.45-.833a.87.87,0,0,1-.419-1,8.794,8.794,0,0,1,.786-1.806,8.646,8.646,0,0,1,1.171-1.584.872.872,0,0,1,1.078-.14l1.444.833a6.77,6.77,0,0,1,1.31-.751V12.709Zm5.364,7.776a2.8,2.8,0,1,0-5.6,0,2.8,2.8,0,1,0,5.6,0Z"
          fill="#aaa"
        />
      </svg>
    ),
    title: "الموظفين",
  },
  {
    id: 5,
    path: "/SupervisorPage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.202"
        height="30.202"
        viewBox="0 0 30.202 30.202"
      >
        <g
          id="Icon_akar-newspaper"
          data-name="Icon akar-newspaper"
          transform="translate(-3 -3)"
        >
          <path
            id="Path_6274"
            data-name="Path 6274"
            d="M7.5,31.7H25.635a6.045,6.045,0,0,0,6.045-6.045V7.522A3.022,3.022,0,0,0,28.657,4.5H13.545a3.022,3.022,0,0,0-3.022,3.022V27.168C10.522,29.673,10,31.7,7.5,31.7Z"
            transform="translate(0.022 0)"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            id="Path_6275"
            data-name="Path 6275"
            d="M4.5,15.022A3.022,3.022,0,0,1,7.522,12h3.022V27.868c0,2.085-.937,3.778-3.022,3.778S4.5,29.953,4.5,27.868Z"
            transform="translate(0 0.056)"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            id="Path_6276"
            data-name="Path 6276"
            d="M19.522,12.011A1.511,1.511,0,1,1,18.011,10.5,1.511,1.511,0,0,1,19.522,12.011Z"
            transform="translate(0.09 0.045)"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-width="3"
          />
          <path
            id="Path_6277"
            data-name="Path 6277"
            d="M16.5,21h9.067M16.5,25.534h4.534"
            transform="translate(0.09 0.124)"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-width="3"
          />
        </g>
      </svg>
    ),
    title: "العقود",
  },

  {
    id: 6,
    path: "/ClientsPage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33.227"
        height="18.459"
        viewBox="0 0 33.227 18.459"
      >
        <path
          id="Icon_material-clear-all"
          data-name="Icon material-clear-all"
          d="M8.192,21.576H34.035V17.884H8.192ZM4.5,28.959H30.343V25.268H4.5ZM11.884,10.5v3.692H37.727V10.5Z"
          transform="translate(-4.5 -10.5)"
          fill="#aaa"
        />
      </svg>
    ),
    title: "'طلبات الخدمات",
  },

  {
    id: 7,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.766"
        height="23.76"
        viewBox="0 0 23.766 23.76"
      >
        <g
          id="Icon_ion-ios-pricetags"
          data-name="Icon ion-ios-pricetags"
          transform="translate(-2.25 -2.25)"
        >
          <path
            id="Path_36396"
            data-name="Path 36396"
            d="M21.947,2.25h-6.27a.735.735,0,0,0-.52.217L2.68,14.992a1.473,1.473,0,0,0,0,2.079L8.595,23.04a1.579,1.579,0,0,0,2.3.111L23.2,10.828a.735.735,0,0,0,.217-.52V3.719A1.469,1.469,0,0,0,21.947,2.25Zm-2.435,5.7A1.633,1.633,0,1,1,20.96,6.5,1.632,1.632,0,0,1,19.512,7.953Z"
            fill="#aaa"
          />
          <path
            id="Path_36397"
            data-name="Path 36397"
            d="M27.517,5.646v6.032a.735.735,0,0,1-.217.52l-13.75,13.75.467.467a1.473,1.473,0,0,0,2.079,0l12.477-12.53a.735.735,0,0,0,.217-.52V7.1a1.47,1.47,0,0,0-1.273-1.454Z"
            transform="translate(-2.774 -0.834)"
            fill="#aaa"
          />
        </g>
      </svg>
    ),
    title: "تقديم العروض",
  },

  {
    id: 8,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="24"
        viewBox="0 0 33 24"
      >
        <path
          id="Icon_material-outline-payments"
          data-name="Icon material-outline-payments"
          d="M28.5,21V9a3.009,3.009,0,0,0-3-3H4.5a3.009,3.009,0,0,0-3,3V21a3.009,3.009,0,0,0,3,3h21A3.009,3.009,0,0,0,28.5,21Zm-3,0H4.5V9h21ZM15,10.5A4.5,4.5,0,1,0,19.5,15,4.494,4.494,0,0,0,15,10.5Zm19.5,0V27a3.009,3.009,0,0,1-3,3H6V27H31.5V10.5Z"
          transform="translate(-1.5 -6)"
          fill="#aaa"
        />
      </svg>
    ),
    title: "المالية",
  },
  {
    id: 9,
    path: "/units",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
      >
        <g
          id="Icon_feather-settings"
          data-name="Icon feather-settings"
          transform="translate(-0.5 -0.5)"
        >
          <path
            id="Path_6332"
            data-name="Path 6332"
            d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_6333"
            data-name="Path 6333"
            d="M29.1,22.5a2.475,2.475,0,0,0,.495,2.73l.09.09a3,3,0,1,1-4.245,4.245l-.09-.09a2.5,2.5,0,0,0-4.23,1.77V31.5a3,3,0,1,1-6,0v-.135A2.475,2.475,0,0,0,13.5,29.1a2.475,2.475,0,0,0-2.73.495l-.09.09A3,3,0,1,1,6.435,25.44l.09-.09a2.5,2.5,0,0,0-1.77-4.23H4.5a3,3,0,1,1,0-6h.135A2.475,2.475,0,0,0,6.9,13.5a2.475,2.475,0,0,0-.5-2.73l-.09-.09A3,3,0,1,1,10.56,6.435l.09.09a2.475,2.475,0,0,0,2.73.495h.12A2.475,2.475,0,0,0,15,4.755V4.5a3,3,0,0,1,6,0v.135a2.5,2.5,0,0,0,4.23,1.77l.09-.09a3,3,0,1,1,4.245,4.245l-.09.09a2.475,2.475,0,0,0-.5,2.73v.12A2.475,2.475,0,0,0,31.245,15H31.5a3,3,0,0,1,0,6h-.135A2.475,2.475,0,0,0,29.1,22.5Z"
            fill="none"
            stroke="#aaa"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
    ),
    title: "الاعدادات ",
  },
];

const SidebarItem = ({ handleOpenSidBarProfile }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <nav className="flex flex-col items-center gap-y-3 md:gap-y-1 lg:gap-y-3 w-full px-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 w-full py-2 md:py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-secondary  bg-opacity-10"
                  : "text-muted hover:text-secondary hover:bg-opacity-10"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
              {item.icon}
              {/* <img src={item.icon} alt="icon" /> */}
            </span>
            <span className="text-xs text-center font-bold">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div
        onClick={handleOpenSidBarProfile}
        className="mt-auto pt-4 md:pt-8 pb-2 text-center"
      >
        <img
          src={imgProfile}
          alt="User Profile"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mx-auto border-2 border-primary"
          width={64}
          height={64}
          loading="lazy"
        />
        <span className="hidden md:block text-xs mt-2 text-white">Admin</span>
      </div>
    </div>
  );
};

export default SidebarItem;
