// icons imports
import { TiArrowBack } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

//=========================================================

export const BackButton = ({ functionality }) => {
  return (
    <button
      className="flex items-center justify-center gap-1 ml-auto rounded text-white bg-[#1c7e68] px-4 py-1  w-fit hover:cursor-pointer"
      onClick={functionality}
    >
      <p className="font-black text-2xl">رجوع</p>
      <TiArrowBack className="scale-x-[-1] text-3xl" />
    </button>
  );
};

//=========================================================

export const AddPriceButton = () => {
  return (
    <button className="absolute bottom-2 left-2 hover:cursor-pointer bg-[#1c7e68] p-6 rounded-full shadow-sm shadow-black/50">
      <FaFileInvoiceDollar className="text-white text-2xl" />
    </button>
  );
};

//=========================================================

export const ButtonRegular = ({
  label,
  bgColor,
  textColor,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center gap-1 rounded font-NotoKufiArabic px-2 active:scale-95 transition-all ease-in hover:cursor-pointer`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <p className="font-black ">{label}</p>
    </button>
  );
};

//=========================================================
export const ConfirmButton = ({
  currentStep,
  steps,
  offer,
  logic,
  addOffer,
  setIsOpen,
}) => {
  const confirmClick = () => {
    addOffer(offer);
    setIsOpen(false);
  };

  if (currentStep === steps.length - 1) {
    return (
      <button
        onClick={confirmClick}
        disabled={currentStep === steps.length - 1 && offer.terms.length === 0}
        className="px-6 py-2 bg-[#1c7e68] text-white rounded-lg text-3xl disabled:bg-gray-300"
      >
        <div className="flex gap-1 items-center justify-center">
          <FaCheck />
          <p>تأكيد</p>
        </div>
      </button>
    );
  }
  return (
    <button
      onClick={logic}
      disabled={
        currentStep === steps.length - 1 ||
        (currentStep === 1 && offer.terms.length === 0)
      }
      className="px-6 py-2 bg-[#1c7e68] text-white rounded-lg text-3xl disabled:bg-gray-300"
    >
      التالي
    </button>
  );
};

//======================================================
