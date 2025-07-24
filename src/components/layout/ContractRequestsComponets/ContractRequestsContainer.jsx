import ContractRequestsTBody from "./ContractRequestsTBody";
import ContractRequestsTH from "./ContractRequestsTH";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
const chooseStatus = [
  {
    name: "لم يتحقق",
    value: "status-1",
  },
  {
    name: "تحت الاجراء",
    value: "status-2",
  },
  {
    name: "تحقق",
    value: "status-2",
  },
];

const ContractRequestsContainer = () => {
  const requests = Array(30)
    .fill()
    .map((_, i) => ({
      clientName: `عميل `,
      developer: `المطور `,
      projectName: `مشروع `,
      propertyAge: `${5 + (i % 10)} سنوات`,
      propertyType: i % 2 === 0 ? "شقة" : "فيلا",
      area: `${100 + i * 5} م²`,
      deedNumber: `DS-${1000 + i}`,
      unitNumber: `U-${200 + i}`,
      location: `موقع `,
      contractType: i % 2 === 0 ? "إيجار" : "تمليك",
      requestStatus: "لم يتحقق",
    }));

  return (
    <>
      {/* Table Card */}
      <div className="bg-card h-[calc(100vh-180px)] relative p-3 rounded-2xl my-3">
        <Tabs
          style={{ direction: "rtl" }}
          defaultValue="refactored"
          className={cn("w-full h-full")}
        >
          <TabsList className="bg-transparent pb-0 w-full flex justify-start  relative rounded-none border-b border-b-muted ">
            <div>
              <TabsTrigger
                value="refactored"
                className="
                     
                      relative  
                      text-muted
                      hover:text-foreground
                      data-[state=active]:text-foreground
                      data-[state=active]:border-b-2
                      data-[state=active]:border-b-white
                      data-[state=active]:rounded-none
                      data-[state=active]:bg-transparent
                      transition-colors
          "
              >
                تعاقد صيانه
              </TabsTrigger>

              <TabsTrigger
                value="cleaning"
                className="
                     
      
                      relative  
                      text-muted
                      hover:text-foreground
                      data-[state=active]:text-foreground
                      data-[state=active]:border-b-2
                      data-[state=active]:border-b-white
                      data-[state=active]:rounded-none
                      data-[state=active]:bg-transparent
                      transition-colors
          "
              >
                تعاقد نضافه
              </TabsTrigger>

              <TabsTrigger
                value="agricultural"
                className="
                     
      
                      relative  
                      text-muted
                      hover:text-foreground
                      data-[state=active]:text-foreground
                      data-[state=active]:border-b-2
                      data-[state=active]:border-b-white
                      data-[state=active]:rounded-none
                      data-[state=active]:bg-transparent
                      transition-colors
          "
              >
                تعاقد زراعه
              </TabsTrigger>
            </div>
          </TabsList>

          {/* Content */}
          <TabsContent
            style={{ direction: "rtl" }}
            value="refactored"
            className="h-full"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 overflow-y-auto rounded-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <table className="w-full border-separate border-spacing-y-6">
                  <ContractRequestsTH />
                  <ContractRequestsTBody
                    chooseStatus={chooseStatus}
                    requests={requests}
                  />
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cleaning" className="h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 overflow-y-auto rounded-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <table className="w-full border-separate border-spacing-y-6">
                  <ContractRequestsTH />
                  <ContractRequestsTBody
                    chooseStatus={chooseStatus}
                    requests={requests}
                  />
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="agricultural" className="h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 overflow-y-auto rounded-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <table className="w-full border-separate border-spacing-y-6">
                  <ContractRequestsTH />
                  <ContractRequestsTBody
                    chooseStatus={chooseStatus}
                    requests={requests}
                  />
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ContractRequestsContainer;
