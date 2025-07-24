import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const OfferConditions = [
  {
    name: "دفعة واحدة سنويًا",
    value: "1",
  },
  {
    name: "دفعتين في السنة",
    value: "2",
  },
  {
    name: "أربع دفعات في السنة",
    value: "4",
  },
];

function OfferConditionsStep({ formData, setFormData }) {
  const [newCondition, setNewCondition] = useState("");

  const handleAddCondition = () => {
    if (newCondition.trim() !== "") {
      const updatedConditions = [
        ...(formData.publicConditions || []),
        newCondition,
      ];
      setFormData({ ...formData, publicConditions: updatedConditions });
      setNewCondition("");
    }
  };

  const handleRemoveCondition = (indexToRemove) => {
    const updatedConditions = formData.publicConditions.filter(
      (_, index) => index !== indexToRemove
    );
    setFormData({ ...formData, publicConditions: updatedConditions });
  };

  const handleOfferConditionsChange = (value) => {
    const selectedOption = OfferConditions.find(
      (option) => option.value === value
    );
    setFormData({ ...formData, offerConditions: selectedOption.name });
  };

  return (
    <div className=" ">
      {/* شروط الدفع */}
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 py-5">
        <div>
          <h4 className="text-primary font-semibold text-2xl pb-5 ">
            شروط الدفع :
          </h4>
          <Select
            dir="rtl"
            // value={formData.offerConditions}
            onValueChange={handleOfferConditionsChange}
          >
            <SelectTrigger className="  w-[500px] py-6 text-lg font-bold bg-white data-[placeholder]:text-primary border-gray-300 rounded-[6px] shadow-none text-primary">
              <SelectValue placeholder="اختر طلب" />
            </SelectTrigger>
            <SelectContent>
              {OfferConditions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* الشروط العامة */}
        <div>
          <h4 className="text-primary font-semibold text-2xl pb-5 ">
            الشروط العامة :
            <span className="text-muted font-bold mx-2">
              يمكن اضافة ثلاثه شؤوط كحد اقصى
            </span>
          </h4>
          <div className="flex items-center gap-2 ">
            <input
              type="text"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              placeholder="اكتب شرط"
              className="w-[500px] h-12 text-lg font-bold  bg-white border border-gray-300 rounded-[6px] px-3 text-primary"
            />
            <button
              onClick={handleAddCondition}
              className="bg-secondary h-12 text-white px-4 py-2 min-w-40  text-lg font-bold rounded-[6px] shadow"
            >
              + إضافة شرط
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 items-start">
        <div className="">
          <h4 className="text-primary font-semibold text-2xl pb-5 ">
            تاريخ انتهاء العرض :
          </h4>
          <input
            type="date"
            className="bg-white w-[500px] h-12 text-primary px-5 py-2 text-lg font-bold border border-gray-300 rounded shadow"
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        {/* التاريخ */}
        <div className="space-y-2 my-5 ">
          {(formData.publicConditions || []).map((condition, index) => (
            <div key={index} className="flex items-center gap-2 relative">
              <span className="text-primary h-8 rounded-full bg-secondary/20 w-8 flex justify-center items-center  font-semibold text-sm absolute right-1 top-1/2 -translate-y-1/2">
                {index + 1}
              </span>
              <input
                type="text"
                value={condition}
                readOnly
                className="w-[500px] ps-10 h-12 text-lg font-bold bg-gray-100 border border-gray-300 rounded-[6px] px-3 text-primary"
              />
              <button
                onClick={() => handleRemoveCondition(index)}
                className="bg-destructive h-12 text-white px-4 py-2 min-w-40 text-lg font-bold rounded-[6px] shadow"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferConditionsStep;
