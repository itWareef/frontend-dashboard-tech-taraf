import { svgIcons } from "@/svgIcons";
import { Link } from "react-router-dom";

const data = [
  {
    icon: svgIcons.listIcon,
    title: "بنود العروض",
    count: 5,
    path: "/add-unit-requests",
  },
  {
    icon: svgIcons.proposalSubmission,
    title: "عروض الأسعار",
    count: 13,
    path: "/offer-price",
  },
  {
    icon: "public/Icons/Group 7486.svg",
    title: "العروض الفنيه ",
    count: 5,
    path: "/contracts",
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
