// React Component
import { useState } from "react";

// components imports
import TechnicalProposalsTable from "./Table";
import AddProposalModal from "./Modals/AddProposalModal";

// ShadCN imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tables arrays imports
import { technical_proposals_table } from "@/mock-data/Tables_Arrays";

// functions imports
import { cn } from "@/lib/utils";

// icons import
import SettingsSearchIcon from "@/assets/Icons/SettingsSearchIcon.svg";
import SearchIcon from "@/assets/Icons/SearchIcon.svg";

//========================================================

export const TechnicalProposalsContainer = () => {
  //----------------------------------------------------------
  const { value: tabValue, name: tabName, table } = technical_proposals_table;
  const { headCells } = table;
  const [tableData, setTableData] = useState(table.rows);

  return (
    <>
      {/* //------------------------------------------------------------------- */}
      <div className="bg-card h-[calc(100vh-180px)] p-3 rounded-2xl my-3">
        <Tabs
          style={{ direction: "rtl" }}
          defaultValue="all_proposals"
          className={cn("w-full h-full")}
        >
          <div className="flex md:flex-nowrap items-center justify-between gap-2 ">
            <TabsList
              className="
              border-b-2 border-zinc-600 bg-transparent pb-0 w-full h-fit flex justify-start relative rounded-none overflow-x-auto 
              scrollbar-none whitespace-nowrap
              "
            >
              <div className="flex gap-5 min-w-max">
                <TabsTrigger
                  value={tabValue}
                  className="
                  text-zinc-400 dark:text-zinc-400 !bg-transparent text-xl px-3 py-2 relative
                  whitespace-nowrap
                  data-[state=active]:text-white
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
                  {tabName}
                </TabsTrigger>
              </div>
            </TabsList>
            <img
              src={SettingsSearchIcon}
              alt="settings icon"
              className="w-8 h-8 shrink-0 mx-2"
            />

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-xl py-2 px-4 gap-4 w-full md:w-[30%] overflow-hidden">
              <img src={SearchIcon} alt="search icon" className="w-6 h-6 " />
              <input
                type="text"
                placeholder="بحث"
                className="flex-1 outline-none"
              />
            </div>
          </div>

          <div
            className="h-full overflow-y-scroll overflow-auto
            [-ms-overflow-style:none]
            [scrollbar-width:thin] [scrollbar-color:#71717a_transparent]
            [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-zinc-500
            [&::-webkit-scrollbar-thumb]:rounded-full
        "
          >
            <TabsContent value={tabValue}>
              <TechnicalProposalsTable headCells={headCells} rows={tableData} />
              <AddProposalModal
                setTableData={setTableData}
                tableData={tableData}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default TechnicalProposalsContainer;

//========================================================
