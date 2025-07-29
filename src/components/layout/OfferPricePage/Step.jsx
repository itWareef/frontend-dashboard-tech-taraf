import { FaCheck } from "react-icons/fa";

export const Step = ({ label, index, steps, currentStep }) => {
  return (
    <div
      className="relative w-full flex items-center justify-center gap-2 p-2 "
      style={{
        alignItems: index === steps.length - 1 ? "justify-start" : "center",
        justifyContent: index === steps.length - 1 ? "flex-start" : "center",
        width: index === steps.length - 1 ? "fit-content" : "100%",
      }}
    >
      {/* Circle */}
      <div
        className="w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center "
        style={{
          color: index < currentStep ? "white" : "#013b41",
          backgroundColor: index < currentStep ? "#013b41" : "transparent",
        }}
      >
        {index < currentStep ? (
          <FaCheck className="text-2xl text-white " />
        ) : (
          <p className="text-2xl font-bold text-[#013b41]">{index + 1}</p>
        )}
      </div>
      {/* Line */}
      {index !== steps.length - 1 && (
        <>
          <div
            className="flex-1 h-2.5 bg-[#013b41] rounded-full"
            style={{
              background: index < currentStep ? "#013b41" : "#aaaaaa",
            }}
          ></div>
        </>
      )}
      {/* Label */}
      <p className="absolute text-2xl text-center -right-[50px] -bottom-8 font-NotoKufiArabic font-bold w-[200px] px-3 py-1">
        {label}
      </p>
    </div>
  );
};
