// react imports
import { useMemo, useState } from "react";

// functions imports
import { isImage, totalWithFee } from "@/lib/utils";

// icons imports
import WhatsAppIcon from "@/assets/Icons/WhatsAppIcon.svg";
import DownloadIcon from "@/assets/Icons/DownloadIcon.svg";
import PrintIcon from "@/assets/Icons/PrintIcon.svg";
import MessageIcon from "@/assets/Icons/MessageIcon.svg";
import AddRequestEyeIcon from "@/assets/Icons/AddRequestEyeIcon.svg";

// icons imports
import { IoTrashBin } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

//Sahd Cn imports
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, ITEMS, UNITS } from "@/mock-data/OfferPriceData";
import { useOffer } from "@/context/OfferPriceContext";

// pdf download button import
import { DownloadButton } from "./PDF_Template/PDF_Template";
import { SpinnerOne } from "@/components/shared/Spinners";

//======================================================================

const GenericTableOffersPrices = ({ headCells = [] }) => {
  const { allOffers: rows } = useOffer();
  return (
    <div className="w-full overflow-x-auto max-h-full rounded-lg [scrollbar-width:auto] [scrollbar-color:#4ade80_#1e1e1e] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#1e1e1e] [&::-webkit-scrollbar-thumb]:bg-[#4ade80] [&::-webkit-scrollbar-thumb]:rounded-full">
      <table className="w-max min-w-full border-separate border-spacing-y-6">
        <thead className="sticky top-0 z-10">
          <tr>
            {headCells.map((cell, index) => {
              const isLast = index === headCells.length - 1;
              return isLast ? (
                <th key={index} className="min-w-[160px] ps-4">
                  <span className="py-3 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
                    {cell}
                  </span>
                </th>
              ) : (
                <th
                  key={index}
                  className={`${
                    headCells.length - 2 === index
                      ? "rounded-l-[6px]"
                      : index === 0
                      ? "rounded-r-[6px]"
                      : ""
                  } min-w-[150px] px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary whitespace-nowrap`}
                >
                  {cell}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="group">
              {Object.entries(row).map(([key, value], cellIndex) =>
                !(key === "terms" || key === "id") ? (
                  <td
                    key={cellIndex}
                    className={`${
                      cellIndex === 0 && "rounded-r-[6px]"
                    } min-w-[150px] px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200`}
                  >
                    {isImage(value) ? (
                      <img
                        src={value}
                        alt="img"
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    ) : (
                      <div>{value}</div>
                    )}
                  </td>
                ) : null
              )}

              <td className="min-w-[200px] px-5 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                <Select dir="rtl">
                  <SelectTrigger
                    iconClass={"text-primary opacity-100"}
                    className="w-full py-5 bg-secondary text-white border-0 font-bold"
                  >
                    <SelectValue placeholder="حالة العرض" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="تم القبول">تم القبول</SelectItem>
                      <SelectItem value="لم يتم القبول">
                        لم يتم القبول
                      </SelectItem>
                      <SelectItem value="قيد الانتظار">قيد الانتظار</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>

              <td className="min-w-[200px] px-5 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={WhatsAppIcon}
                    alt="whatsapp"
                    className="w-8 h-8 cursor-pointer"
                  />
                  <img
                    src={MessageIcon}
                    alt="message"
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
              </td>

              <td className="min-w-[200px] px-5 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={AddRequestEyeIcon}
                    alt="Preview"
                    className="w-8 h-8 cursor-pointer"
                  />
                  <div>
                    <DownloadButton
                      documentOfferData={row}
                      WhileLoadingUI={
                        <span>
                          <SpinnerOne />
                        </span>
                      }
                      AfterLoadingUI={
                        <img
                          src={DownloadIcon}
                          alt="download"
                          className="w-8 h-8 cursor-pointer"
                        />
                      }
                    />
                  </div>
                  <img
                    src={PrintIcon}
                    alt="print"
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTableOffersPrices;

export const BandTable = () => {
  const { offer, offerUpdater } = useOffer();
  const offerNumber = useMemo(() => Math.floor(Math.random() * 100000), []);

  const initialRow = {
    item: "اختر بند",
    unit: "اختر وحدة",
    category: "اختر صنف",
    quantity: "",
    price: "",
  };

  const [rows, setRows] = useState(offer.terms);
  const [newRow, setNewRow] = useState(initialRow);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRow = () => {
    if (
      newRow.item === "اختر بند" ||
      newRow.unit === "اختر وحدة" ||
      newRow.category === "اختر صنف" ||
      newRow.quantity === "" ||
      newRow.price === ""
    )
      return;

    const updatedRows = [...rows, newRow];
    setRows(updatedRows);
    setNewRow(initialRow);

    const startDate = new Date();
    const endDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

    const newOffer = {
      name: "عبد الله",
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      offerNumber,
      terms: updatedRows,
      price: totalWithFee(updatedRows),
    };

    offerUpdater(newOffer);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);

    const startDate = new Date();
    const endDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    const newOffer = {
      name: "عبد الله",
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      offerNumber,
      terms: updatedRows,
      price: totalWithFee(updatedRows),
    };
    offerUpdater(newOffer);
  };

  return (
    <div className="w-full overflow-x-scroll max-h-full bg-card/90 p-3 rounded-lg [scrollbar-width:auto] [scrollbar-color:#4ade80_#1e1e1e] [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-[#4ade80] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[2px] [&::-webkit-scrollbar-thumb]:border-gray-500">
      <table className="w-max min-w-full text-sm text-left rtl:text-right border-separate border-spacing-y-2 ">
        <thead className="text-xs text-white text-right uppercase bg-[#1c7e68] rounded-3xl">
          <tr className="text-center">
            <th
              scope="col"
              className="px-6 py-3 text-xl md:text-2xl rounded-r-xl"
            >
              البند
            </th>
            <th scope="col" className="px-6 py-3 text-xl md:text-2xl">
              الصنف
            </th>
            <th scope="col" className="px-6 py-3 text-xl md:text-2xl">
              الكمية
            </th>
            <th scope="col" className="px-6 py-3 text-xl md:text-2xl">
              الوحدة
            </th>
            <th scope="col" className="px-6 py-3 text-xl md:text-2xl">
              السعر
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xl md:text-2xl rounded-l-xl"
            >
              العمليات
            </th>
          </tr>
        </thead>
        <tbody className="font-black w-full text-right">
          {rows.map((row, index) => (
            <tr className="bg-[#c8cccc] text-[#023b41]" key={index}>
              <td className="rounded-r-xl text-center px-6 py-3 text-xl md:text-2xl">
                {row.item}
              </td>
              <td className="px-6 py-3 text-xl md:text-2xl text-center">
                {row.category}
              </td>
              <td className="px-6 py-3 text-xl md:text-2xl text-center">
                {row.quantity}
              </td>
              <td className="px-6 py-3 text-xl md:text-2xl text-center">
                {row.unit}
              </td>
              <td className="text-center px-6 py-3 text-xl md:text-2xl">
                {row.price}
              </td>
              <td className="px-6 py-2 font-medium whitespace-nowrap rounded-l-xl text-center">
                <button
                  onClick={() => handleDeleteRow(index)}
                  aria-label="Delete"
                  className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
                >
                  <IoTrashBin className="text-xl" />
                </button>
              </td>
            </tr>
          ))}

          <tr className="bg-[#c8cccc]">
            <InputBandRow
              price={newRow.price}
              unit={newRow.unit}
              quantity={newRow.quantity}
              category={newRow.category}
              item={newRow.item}
              handleChange={handleChange}
            />
            <td
              colSpan={1}
              className="flex items-center justify-center py-3 mx-3"
            >
              <button
                onClick={handleAddRow}
                className="bg-[#178D69] text-lg md:text-xl text-white border-none font-bold rounded-lg px-2 py-2 flex items-center gap-4 md:gap-8 cursor-pointer w-full justify-center "
              >
                <FaCheck className="text-2xl md:text-3xl font-bold text-white" />
                أضف بند
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const InputBandRow = ({
  price,
  unit,
  quantity,
  category,
  item,
  handleChange,
}) => {
  return (
    <>
      <td className="rounded-r-xl px-6 py-3 text-2xl">
        <select
          name="item"
          value={item}
          onChange={handleChange}
          className="bg-white rounded w-full px-2"
        >
          {ITEMS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </td>
      <td className="px-6 py-3 text-2xl">
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className="bg-white rounded w-full px-2"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </td>
      <td className="px-6 py-3 text-2xl">
        <input
          type="number"
          name="quantity"
          placeholder="الكمية"
          value={quantity}
          onChange={handleChange}
          className="min-w-[100px] w-full py-1 bg-white rounded placeholder:text-center"
        />
      </td>
      <td className="px-6 py-3 text-2xl">
        <select
          name="unit"
          value={unit}
          onChange={handleChange}
          className="bg-white rounded w-full px-2"
        >
          {UNITS.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </td>
      <td className="px-6 py-3 text-2xl">
        <input
          type="number"
          name="price"
          placeholder="السعر"
          value={price}
          onChange={handleChange}
          className="min-w-[100px] w-full py-1 bg-white rounded placeholder:text-center"
        />
      </td>
    </>
  );
};
