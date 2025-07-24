import { useState } from "react";

import OfferPriceTBody from "./OfferPriceTBody";
import OfferPriceTH from "./OfferPriceTH";
import MultiStepForm from "../ModelAddQuotationRequest/AddQuotationRequest";
const OfferPriceContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModel = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <div className="fixed bg-background  top-0 left-0 right-0 bottom-0 z-[999999]">
          <MultiStepForm />
        </div>
      )}
      <div className="px-4 relative z-50">
        {/* Table Card */}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Project */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-7  translate-y-3  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={handleOpenModel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.732"
                height="46.31"
                viewBox="0 0 34.732 46.31"
              >
                <path
                  id="Icon_fa-solid-file-invoice-dollar"
                  data-name="Icon fa-solid-file-invoice-dollar"
                  d="M5.789,0A5.794,5.794,0,0,0,0,5.789V40.521A5.794,5.794,0,0,0,5.789,46.31H28.944a5.794,5.794,0,0,0,5.789-5.789V14.472H23.155a2.891,2.891,0,0,1-2.894-2.894V0ZM23.155,0V11.577H34.732ZM5.789,7.236A1.451,1.451,0,0,1,7.236,5.789h5.789a1.447,1.447,0,1,1,0,2.894H7.236A1.451,1.451,0,0,1,5.789,7.236Zm0,5.789a1.451,1.451,0,0,1,1.447-1.447h5.789a1.447,1.447,0,1,1,0,2.894H7.236A1.451,1.451,0,0,1,5.789,13.025Zm11.577,6.512a1.451,1.451,0,0,1,1.447,1.447v1.565a18.11,18.11,0,0,1,2.18.461,1.447,1.447,0,1,1-.751,2.795,11.859,11.859,0,0,0-2.9-.479,4.28,4.28,0,0,0-2.135.5,1.262,1.262,0,0,0-.733,1.158c0,.335.118.588.66.914a12.713,12.713,0,0,0,2.641.986l.045.009A13.424,13.424,0,0,1,21.1,30.21a4.045,4.045,0,0,1,2.053,3.455,4.232,4.232,0,0,1-2.071,3.763,6.3,6.3,0,0,1-2.27.823V39.8a1.447,1.447,0,1,1-2.894,0v-1.61a19.356,19.356,0,0,1-2.795-.8c-.19-.063-.38-.127-.561-.19a1.444,1.444,0,1,1,.914-2.741c.226.072.434.145.642.217a11.263,11.263,0,0,0,3.283.787,3.985,3.985,0,0,0,2.144-.479,1.345,1.345,0,0,0,.706-1.266,1.18,1.18,0,0,0-.7-1.049,11.429,11.429,0,0,0-2.623-1.013l-.145-.045a13.8,13.8,0,0,1-3.148-1.239,3.856,3.856,0,0,1-2.053-3.374,4.145,4.145,0,0,1,2.153-3.663,6.65,6.65,0,0,1,2.18-.787V20.984a1.451,1.451,0,0,1,1.447-1.447Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
          {/* Table Container with scroll */}
          <div className="relative h-full">
            <div
              className="absolute inset-0 overflow-y-auto rounded-[6px] 
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
            >
              <table className="w-full border-separate border-spacing-y-6">
                {/* Table Header */}
                <OfferPriceTH />

                {/* Table Body */}
                <OfferPriceTBody />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferPriceContainer;
