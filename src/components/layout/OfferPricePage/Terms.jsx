// functions imports
import { totalAmount, totalQuantity, totalUnit } from "@/lib/utils";
import { useOffer } from "@/context/OfferPriceContext";

//================================================================

const Terms = () => {
  const { offer } = useOffer();
  return (
    <div className="flex flex-row-reverse gap-20 font-NotoKufiArabic text-[#034249]">
      <div className="flex-1/2 flex flex-col gap-2">
        <CustomerDataDisplay offer={offer} />
      </div>
      <div className="flex-1/2 flex flex-col gap-2 ">
        <h1 className="text-xl font-bold ">ملخص البنود</h1>
        <TermsTableDisplay offer={offer} />
      </div>
    </div>
  );
};

export default Terms;

export const TermsTableDisplay = ({ offer }) => {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[600px] gap-2">
      <div className=" rounded-2xl overflow-hidden shadow-sm shadow-gray-500/50 bg-white py-5 px-8">
        <div className="bg-white flex text-right font-bold py-1 text-[#034249]">
          <p className="flex-[20%]"></p>
          <p className="flex-[40%]">الصنف</p>
          <p className="flex-[20%]">الكمية</p>
          <p className="flex-[20%]">السعر</p>
        </div>
        {/* //------------------------ */}
        {offer?.terms?.map((item, index) => {
          return (
            <div
              className="bg-white flex text-right py-1 font-NotoKufiArabic text-gray-500"
              key={index}
            >
              <p className="flex-[20%]"></p>
              <p className="flex-[40%]">{item.category}</p>
              <p className="flex-[20%]">{item.quantity}</p>
              <p className="flex-[20%]">{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-white flex text-right py-5 px-8 rounded-xl shadow-sm shadow-gray-500/50 text-gray-500">
        <p className="flex-[20%] px-5 text-[#034249]">الاجمالي</p>
        <p className="flex-[40%]">{totalUnit(offer.terms)}</p>
        <p className="flex-[20%]">{totalQuantity(offer.terms)}</p>
        <p className="flex-[20%]">{totalAmount(offer.terms)}</p>
      </div>
    </div>
  );
};

export const CustomerDataDisplay = ({ offer }) => {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[600px] gap-2">
      <div className="flex items-center font-bold justify-between py-1 font-NotoKufiArabic text-[#034249] mb-5">
        <p>ملخص عرض السعر</p>
        <p>رقم عرض السعر #75774</p>
      </div>
      <h1 className="text-xl font-bold">بيانات العميل</h1>
      <div className=" rounded-2xl overflow-hidden shadow-sm shadow-gray-500/50">
        {/* //------------------------ */}
        <div className="bg-white flex flex-col text-right p-5 gap-2 font-bold font-NotoKufiArabic text-gray-500">
          <p className="flex-[20%]"> اسم العميل : {offer.name} </p>
          <p className="flex-[20%]">رقم العميل : 54856 </p>
          <p className="flex-[40%]">
            {" "}
            البريد الالكتروني : eslam40000@gmail.com
          </p>
          <p className="flex-[20%]"></p>
        </div>
      </div>
    </div>
  );
};
