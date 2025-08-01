// icons imports
import ContactPhoneIcon from "@/assets/Icons/ContactPhoneIcon.svg";
import ListIcon from "@/assets/Icons/listIcon.svg";
import PriceTagIcon from "@/assets/Icons/PriceTagIcon.svg";
import FormIcon from "@/assets/Icons/Group 7486.svg";

// React Router imports
import { Link } from "react-router-dom";

const data = [
  {
    icon: ContactPhoneIcon,
    title: "جهات التقديم",
    count: 13,
    path: "/submitting-entities",
  },
  {
    icon: ListIcon,
    title: "بنود العرض",
    count: 13,
    path: "/offers-terms",
  },
  {
    icon: PriceTagIcon,
    title: "عروض الأسعار",
    count: 13,
    path: "/offer-price",
  },
  {
    icon: FormIcon,
    title: "العروض الفنية",
    count: 13,
    path: "/technical-proposals",
  },
];

const ProposalSubmissionCards = () => {
  return (
    <div className=" flex justify-center flex-wrap gap-6">
      {data.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`w-full sm:w-[340px] relative rounded-xl px-5 py-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-card flex flex-col items-center text-center space-y-2 group  hover:-translate-y-2`}
        >
          {/* Badge */}
          <span className="absolute flex items-center justify-center bg-red-500 text-white w-8 h-8 rounded-full -top-2 -left-2 group-hover:scale-110 group-hover:bg-red-600 transition-transform duration-300">
            {item.count}
          </span>

          {/* Icon */}
          <div className="text-secondary group-hover:text-white transition-colors duration-300">
            <img src={item.icon} alt={item.title} />
          </div>

          {/* Title */}
          <h3 className="text-lg text-muted group-hover:text-white transition-colors duration-300">
            {item.title}
          </h3>

          {/* Count */}
          <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
            {item.count}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ProposalSubmissionCards;
