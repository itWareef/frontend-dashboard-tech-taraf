// components imports
import GenericTableOffersPrices from "./Table";

// Tables arrays imports
import { offer_price_table } from "@/mock-data/Tables_Arrays";

// Modals imports
import AddOfferPriceModal from "./Modals/AddOfferPriceModal";

//=========================================================

const OfferPriceContainer = () => {
  const { headCells } = offer_price_table;

  return (
    <div className="px-4  z-50">
      <div className="bg-card h-[calc(100vh-165px)] p-3 rounded-2xl my-3">
        <div className="relative h-full">
          <div
            className="absolute inset-0 overflow-y-auto rounded-[6px] 
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
          >
            <GenericTableOffersPrices headCells={headCells} />
          </div>
        </div>
        <AddOfferPriceModal />
      </div>
    </div>
  );
};

export default OfferPriceContainer;
