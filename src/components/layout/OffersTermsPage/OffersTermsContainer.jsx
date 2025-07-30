// components imports
import OffersTermsTable from "./Table";
import AddOfferTermModal from "./Modals/AddOfferTermModal";

// ShadCN imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tables arrays imports
import { offers_terms_tabs } from "@/mock-data/Tables_Arrays";

// functions imports
import { cn } from "@/lib/utils";

// icons import
import SettingsSearchIcon2 from "@/assets/Icons/SettingsSearchIcon2.svg";
import SearchIcon from "@/assets/Icons/SearchIcon.svg";

// react imports
import React, { useState } from "react";

//========================================================

const select_input_array = [
  {
    placeholder: "البند",
    values: ["البند 1", "البند 2", "البند 3"],
  },
  {
    placeholder: "الصنف",
    values: ["الصنف 1", "الصنف 2", "الصنف 3"],
  },
];

export const SelectInput = ({ placeholder, values }) => {
  return (
    <div className="max-w-[150px] w-full h-full flex items-center">
      <Select dir="rtl">
        <SelectTrigger
          iconClass={"text-primary  opacity-100"}
          className="w-full py-5 text-black font-bold !bg-transparent !border-none !shadow-none"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

//========================================================

export const OffersTermsContainer = () => {
  //----------------------------------------------------------
  const { value: tabValue, name: tabName, table } = offers_terms_tabs;
  const { headCells } = table;
  const [data, setData] = useState(table.rows);

  return (
    <>
      {/* //------------------------------------------------------------------- */}

      <div className="flex flex-col sm:flex-row items-stretch justify-between border-b-2 border-zinc-300 gap-4 ">
        {/* Left Side – Select Inputs */}
        <div className="flex items-center gap-4 w-full sm:w-1/2 ">
          {select_input_array.map(({ placeholder, values }, index) => (
            <React.Fragment key={index}>
              <SelectInput placeholder={placeholder} values={values} />
            </React.Fragment>
          ))}
        </div>

        {/* Right Side – Settings Icon + Search Bar */}
        <div className="flex flex-row items-stretch gap-4 py-2 ">
          {/* Settings Icon */}
          <div className="hidden items-center justify-center rounded-xl p-3 bg-white sm:w-auto w-full sm:flex">
            <img
              src={SettingsSearchIcon2}
              alt="settings icon"
              className="w-8 h-8 shrink-0 bg-transparent"
            />
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-[#013b41] rounded-xl p-3 gap-3 ">
            <img
              src={SearchIcon}
              alt="search icon"
              className="w-6 h-6 text-zinc-500"
            />
            <input
              type="text"
              placeholder="بحث"
              className="flex-1 bg-transparent outline-none placeholder:text-zinc-500 text-2xl text-white min-w-0"
            />
          </div>
        </div>
      </div>

      {/* //------------------------------------------------------------------- */}
      <div className="bg-card h-[calc(100vh-180px)] p-3 rounded-2xl my-3">
        <Tabs
          style={{ direction: "rtl" }}
          defaultValue="terms"
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
                  text-zinc-400 dark:text-zinc-400 text-xl px-3 py-2 relative
                  whitespace-nowrap
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
              <OffersTermsTable
                headCells={headCells}
                rows={data}
                setData={setData}
              />
              <AddOfferTermModal setData={setData} data={data} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default OffersTermsContainer;

//========================================================
