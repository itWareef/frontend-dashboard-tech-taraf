// components imports
import GenericTable from "@/components/layout/StorePage/Tables";
import AddNewCategoryModel from "./Modals/AddNewCategoryModel";
import AddDiscountCouponModel from "./Modals/AddDiscountCoupon";
import AddNewTypeModel from "./Modals/AddNewType";

// ShadCN imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tables arrays imports
import { table_store_tabs } from "@/mock-data/Tables_Arrays";

// functions imports
import { cn } from "@/lib/utils";
import AddPromotionalPostModel from "./Modals/AddPromotionalPostModel";
import AddNewRecipientModal from "./Modals/AddNewRecipientModal";
import AddPaymentModel from "./Modals/AddPaymentsModal";

//========================================================

const ModalsRendering = (tabName) => {
  if (tabName === "coupons") {
    return <AddDiscountCouponModel />;
  } else if (tabName === "items" || tabName === "features") {
    return <AddNewCategoryModel />;
  } else if (tabName === "types") {
    return <AddNewTypeModel />;
  } else if (tabName === "promotional_posts") {
    return <AddPromotionalPostModel />;
  } else if (tabName === "product_requests") {
    return <AddNewRecipientModal />;
  } else if (tabName === "payments") {
    return <AddPaymentModel />;
  }
};

//========================================================

export const StorePageContainer = () => {
  //----------------------------------------------------------
  return (
    <div className="bg-card h-[calc(100vh-180px)] p-3 rounded-2xl my-3">
      <Tabs
        style={{ direction: "rtl" }}
        defaultValue="items"
        className={cn("w-full h-full")}
      >
        <TabsList className="border-b-2 border-zinc-600 bg-transparent pb-0 w-full h-fit flex justify-start  relative rounded-none">
          <div className="flex gap-5">
            {/* //---------------------------------------------- */}

            {/* Tabs array */}
            {table_store_tabs.map((tab, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="
                     text-zinc-400
                     dark:text-zinc-400
                     text-xl
                     px-3 py-2
                     relative
                     data-[state=active]:after:content-['']
                     data-[state=active]:after:absolute 
                     data-[state=active]:after:bottom-0
                     data-[state=active]:after:left-1/2
                     data-[state=active]:after:-translate-x-1/2
                     data-[state=active]:after:w-full 
                     data-[state=active]:after:h-[2px]
                    data-[state=active]:after:bg-white
                     "
                >
                  {tab.name}
                </TabsTrigger>
              );
            })}
          </div>
        </TabsList>
        <div className="h-full overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* //---------------------------------------------- */}

          {/* Tabs Content */}
          {table_store_tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <GenericTable
                headCells={tab.table.headCells}
                rows={tab.table.rows}
                tabName={tab.value}
              />

              {/* //---------------------------------------------- */}

              {/* dynamic rendering based on the tab */}

              {ModalsRendering(tab.value)}

              {/* //---------------------------------------------- */}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default StorePageContainer;

//========================================================
