// React  imports
import { useState } from "react";

// components imports
import { Step } from "../Step";
import {
  StepperContentFour,
  StepperContentOne,
  StepperContentThree,
} from "../StepperContent";

// icons imports
import { HiMenuAlt2 } from "react-icons/hi";

import AddOfferPriceIcon from "@/assets/Icons/AddOfferPriceIcon.svg";
import { BackButton, ConfirmButton } from "../Components/Buttons";
import { useOffer } from "@/context/OfferPriceContext";

//==========================================================================

const ModelContent = ({ setIsOpen }) => {
  const { offer, addOffer, offerUpdater } = useOffer();
  const steps = ["الجهة الموجهة", "اختر البنود", "تأكيد"];
  const [currentStep, setCurrentStep] = useState(0);

  // Functionality - Logic

  const goNext = () => {
    if (currentStep <= steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <main className="absolute inset-0 flex flex-col bg-white/40 backdrop-blur-2xl z-50 h-screen w-screen p-7 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
          <HiMenuAlt2 className="text-5xl" />
          <h1 className="text-4xl text-[#013b41] text-right font-black ">
            اضافة عرض السعر
          </h1>
        </div>
        <BackButton functionality={() => setIsOpen(false)} />
      </div>
      {/* //======================================== */}

      <div className="w-full flex-1 flex flex-col gap-14 mx-auto p-4 mt-10">
        {/* Stepper Header */}
        {/* //================================================ */}
        <div
          dir="rtl"
          className="flex w-full justify-between items-center px-10 flex-[30%]"
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              label={label}
              index={index}
              steps={steps}
              currentStep={currentStep}
            />
          ))}
        </div>
        {/* //=============================================== */}
        {/* Step Content */}
        <div className="mt-10 flex-[50%]">
          {currentStep === 0 && <StepperContentOne />}
          {currentStep === 1 && <StepperContentThree />}
          {currentStep === 2 && <StepperContentFour />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between ">
          <button
            onClick={goBack}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-[#1c7e68] text-white text-3xl rounded-lg disabled:bg-gray-300"
          >
            السابق
          </button>
          <ConfirmButton
            currentStep={currentStep}
            offerUpdater={offerUpdater}
            steps={steps}
            offer={offer}
            addOffer={addOffer}
            logic={goNext}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </main>
  );
};

//======================================================

const AddOfferPriceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="absolute grid place-content-center bottom-2 left-2 rounded-full p-7 bg-[#1c7e68] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={AddOfferPriceIcon} className="size-7" />
      </div>
      {isOpen && <ModelContent setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddOfferPriceModal;
