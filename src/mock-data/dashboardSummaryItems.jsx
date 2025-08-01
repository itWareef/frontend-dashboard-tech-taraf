const dashboardSummaryItems = [
  {
    id: 1,
    icon: (
      <svg
        width="62"
        height="35"
        viewBox="0 0 62 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.78636 20.6114H54.2917V13.8249H6.78636V20.6114ZM-0.00012207 34.1843H47.5053V27.3979H-0.00012207V34.1843ZM13.5728 0.251953V7.03843H61.0782V0.251953H13.5728Z"
          fill="#1C7E68"
        />
      </svg>
    ),
    title: "طلبات جديدة",
    count: 89,
    path: "/new-requests",
  },
  {
    id: 2,
    icon: (
      <svg
        width="43"
        height="47"
        viewBox="0 0 43 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.4875 1.86646L40.985 8.36398L34.4875 14.8615M8.4974 45.1833L1.99988 38.6857L8.4974 32.1882"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.985 8.36401H17.1608C8.78764 8.36401 1.99988 15.1518 1.99988 23.5249M1.99988 38.6858H25.8241C34.1973 38.6858 40.985 31.898 40.985 23.5249"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "طلبات قيد المعالجة",
    count: 35,
    path: "pending-requests",
  },

  {
    id: 3,
    icon: (
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.7163 21.7498V23.6228C43.7112 32.6388 37.7764 40.5775 29.1304 43.1338C20.4844 45.6902 11.1868 42.2552 6.2796 34.6916C1.37239 27.1281 2.02456 17.2377 7.88244 10.384C13.7403 3.53033 23.4085 1.34594 31.6439 5.01545"
          stroke="#1C7E68"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.7163 7.33618L23.3582 27.7147L17.2507 21.6072"
          stroke="#1C7E68"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "طلبات تم الانتهاء منها ",
    count: 65,
    path: "/completed-requests",
  },
  {
    id: 4,
    icon: (
      <svg
        width="54"
        height="35"
        viewBox="0 0 54 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.3563 14.7944C40.3797 14.7944 43.6033 11.5466 43.6033 7.5232C43.6033 3.49978 40.3797 0.251953 36.3563 0.251953C32.3328 0.251953 29.085 3.49978 29.085 7.5232C29.085 11.5466 32.3328 14.7944 36.3563 14.7944ZM16.9663 14.7944C20.9897 14.7944 24.2133 11.5466 24.2133 7.5232C24.2133 3.49978 20.9897 0.251953 16.9663 0.251953C12.9428 0.251953 9.69501 3.49978 9.69501 7.5232C9.69501 11.5466 12.9428 14.7944 16.9663 14.7944ZM16.9663 19.6419C11.3189 19.6419 0 22.4777 0 28.1251V34.1844H33.9325V28.1251C33.9325 22.4777 22.6136 19.6419 16.9663 19.6419ZM36.3563 19.6419C35.6534 19.6419 34.8535 19.6904 34.0052 19.7631C36.8168 21.7991 38.78 24.5379 38.78 28.1251V34.1844H53.3225V28.1251C53.3225 22.4777 42.0036 19.6419 36.3563 19.6419Z"
          fill="#1C7E68"
        />
      </svg>
    ),
    title: " عدد المشرفين   ",
    count: 88,
    path: "/SupervisorPage",
  },
  {
    id: 5,
    icon: (
      <svg
        width="68"
        height="34"
        viewBox="0 0 68 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.9325 19.1266C38.5417 19.1266 42.6136 20.2294 45.922 21.6715C48.9759 23.0288 50.8988 26.0827 50.8988 29.3911V31.1443C50.8988 32.6996 49.6263 33.972 48.0711 33.972H19.794C18.2387 33.972 16.9663 32.6996 16.9663 31.1443V29.4194C16.9663 26.0827 18.8891 23.0288 21.943 21.6998C25.2515 20.2294 29.3234 19.1266 33.9325 19.1266ZM11.3108 19.8335C14.4213 19.8335 16.9663 17.2886 16.9663 14.1781C16.9663 11.0676 14.4213 8.52267 11.3108 8.52267C8.20036 8.52267 5.65542 11.0676 5.65542 14.1781C5.65542 17.2886 8.20036 19.8335 11.3108 19.8335ZM14.5062 22.944C13.4599 22.7743 12.4136 22.6612 11.3108 22.6612C8.51141 22.6612 5.85336 23.255 3.44981 24.3013C1.35566 25.1964 -0.00198709 27.2551 2.18312e-06 29.5325L1.73367e-06 31.1443C1.73367e-06 32.6996 1.27247 33.972 2.82771 33.972H12.7247V29.4194C12.7247 27.0724 13.3751 24.8668 14.5062 22.944ZM56.5542 19.8335C59.6647 19.8335 62.2096 17.2886 62.2096 14.1781C62.2096 11.0676 59.6647 8.52267 56.5542 8.52267C53.4437 8.52267 50.8988 11.0676 50.8988 14.1781C50.8988 17.2886 53.4437 19.8335 56.5542 19.8335ZM67.865 29.5325C67.865 27.2421 66.5077 25.2061 64.4152 24.3013C61.9357 23.2193 59.2595 22.661 56.5542 22.6612C55.4514 22.6612 54.4051 22.7743 53.3589 22.944C54.49 24.8668 55.1403 27.0724 55.1403 29.4194V33.972H65.0373C66.5926 33.972 67.865 32.6996 67.865 31.1443V29.5325ZM33.9325 0.0395508C38.6265 0.0395508 42.4156 3.82868 42.4156 8.52267C42.4156 13.2167 38.6265 17.0058 33.9325 17.0058C29.2385 17.0058 25.4494 13.2167 25.4494 8.52267C25.4494 3.82868 29.2385 0.0395508 33.9325 0.0395508Z"
          fill="#1C7E68"
        />
      </svg>
    ),
    title: "عدد العملاء",
    count: 88,
    path: "/ClientsPage",
  },
  {
    id: 6,
    icon: (
      <svg
        width="43"
        height="39"
        viewBox="0 0 43 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.8563 16.6509V15.3465L13.4282 5.75493L0 15.3465V34.5296H9.59155V23.0197H17.2648V34.5296H20.4876C19.6627 32.7839 19.1831 30.8464 19.1831 28.7747C19.1831 23.4226 22.3291 18.8186 26.8563 16.6509ZM42.2028 19.3941V0H17.2648V3.77907L30.693 13.3706V15.4999C31.326 15.404 31.9591 15.3465 32.6113 15.3465C36.3712 15.3465 39.7666 16.9003 42.2028 19.3941ZM30.693 7.67324H34.5296V11.5099H30.693V7.67324Z"
          fill="#1C7E68"
        />
        <path
          d="M42.2029 28.7747C42.2029 23.4801 37.9059 19.1831 32.6113 19.1831C27.3168 19.1831 23.0198 23.4801 23.0198 28.7747C23.0198 34.0692 27.3168 38.3662 32.6113 38.3662C37.9059 38.3662 42.2029 34.0692 42.2029 28.7747ZM31.6522 34.5296V29.7338H26.8564V27.8155H31.6522V23.0197H33.5705V27.8155H38.3663V29.7338H33.5705V34.5296H31.6522Z"
          fill="#1C7E68"
        />
      </svg>
    ),
    title: "عدد المطورين",
    count: 150,
    path: "/developers",
  },
  {
    id: 7,
    icon: (
      <svg
        width="44"
        height="37"
        viewBox="0 0 44 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.5332V36.2012H11.8008V26.3672H15.7344V36.2012H27.5352V16.5332L13.7676 6.69922L0 16.5332ZM23.6016 32.2676H19.668V22.4336H7.86719V32.2676H3.93359V18.559L13.7676 11.5375L23.6016 18.559V32.2676ZM31.4688 8.66602H35.4023V12.5996H31.4688V8.66602ZM31.4688 16.5332H35.4023V20.4668H31.4688V16.5332ZM31.4688 24.4004H35.4023V28.334H31.4688V24.4004Z"
          fill="#1C7E68"
        />
        <path
          d="M17.7012 0.798828V4.67342L21.6348 7.48594V4.73242H39.3359V32.2676H31.4688V36.2012H43.2695V0.798828H17.7012Z"
          fill="#1C7E68"
        />
      </svg>
    ),
    title: "عدد الوحدات",
    count: 85,
    path: "/units",
  },
  {
    id: 8,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.328 33.1497H26.1942C30.0356 33.1497 33.1496 30.0356 33.1496 26.1943V5.32804C33.1496 3.40736 31.5926 1.85034 29.6719 1.85034H12.2834C10.3627 1.85034 8.8057 3.40736 8.8057 5.32804V27.9331C8.8057 30.8144 8.20928 33.1497 5.328 33.1497Z"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.85034 14.0224C1.85034 12.1017 3.40736 10.5447 5.32804 10.5447H8.80575V28.8026C8.80575 31.2022 7.72766 33.1497 5.32804 33.1497C2.92843 33.1497 1.85034 31.2022 1.85034 28.8026V14.0224Z"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2388 10.5445C19.2388 11.5049 18.4603 12.2834 17.5 12.2834C16.5396 12.2834 15.7611 11.5049 15.7611 10.5445C15.7611 9.58417 16.5396 8.80566 17.5 8.80566C18.4603 8.80566 19.2388 9.58417 19.2388 10.5445Z"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15.7611 20.9778H26.1942M15.7611 26.1943H20.9777"
          stroke="#1C7E68"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: " المشاريع",
    count: 120,
    path: "/projects",
  },
];
export default dashboardSummaryItems;
