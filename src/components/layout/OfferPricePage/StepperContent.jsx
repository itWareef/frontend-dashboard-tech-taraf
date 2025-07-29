// arrays imports
import { developers } from "@/mock-data/OfferPriceData";
// icons imports
import { TiPlus } from "react-icons/ti";
// components imports
import Select_Input from "./Components/Select_Input";
import { ButtonRegular } from "./Components/Buttons";
import Terms from "./Terms";
// table imports
import { BandTable } from "./Table";

export const StepperContentOne = () => {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10 text-right">
      <div className="flex gap-10 items-center ">
        <p className="text-3xl font-bold text-[#013b41] ">الجهة الموجهة</p>
        <div className="flex flex-row-reverse gap-5 ">
          <ButtonRegular
            label="عميل"
            bgColor="#038d7d"
            textColor="white"
            className="px-15 py-2 rounded-lg shadow-sm shadow-black/10 flex-1 text-2xl"
          />
          <ButtonRegular
            label="مطور"
            bgColor="white"
            textColor="#013b41"
            className="px-15 py-2 rounded-lg shadow-sm shadow-black/10 flex-1 text-2xl"
          />
        </div>
        <TiPlus className="text-5xl text-white bg-[#038d7d] p-2 rounded-lg" />
      </div>
      {/* //--------------------------------------- */}
      <div className="flex gap-10 items-center text-right">
        <p className="text-3xl font-bold text-[#013b41] ">اختر المطور</p>
        <Select_Input
          array={developers}
          className="h-[50px] text-2xl placeholder:text-2xl"
        />
      </div>
    </div>
  );
};

//=======================================================

export const StepperContentThree = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 text-right py-15">
      <h1 className="text-xl font-bold text-[#013b41]">اختر البند</h1>
      <BandTable />
    </div>
  );
};

//=======================================================

export const StepperContentFour = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 text-right py-15">
      <Terms />
    </div>
  );
};

//=======================================================
