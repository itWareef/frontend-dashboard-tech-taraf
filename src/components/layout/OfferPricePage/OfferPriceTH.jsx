const OfferPriceTH = () => {
  return (
    <thead className="sticky  h-[45px] top-0 z-10 ">
      <tr>
        <th className="px-4  text-center text-white font-normal  text-xl bg-secondary rounded-r-[6px]">
          رقم العرض
        </th>
        <th className="px-4  text-center text-white font-normal  text-xl bg-secondary">
          اسم العميل
        </th>
        <th className="px-4  text-center text-white font-normal  text-xl bg-secondary">
          تاريخ انشاء العرض
        </th>

        <th className="px-4  text-center text-white font-normal  text-xl bg-secondary">
          تاريخ انتهاء العرض{" "}
        </th>
        <th className="px-4  text-center text-white font-normal  text-xl bg-secondary">
          قيمة العرض
        </th>
        <th className="px-4   text-center text-white font-normal  text-xl bg-secondary rounded-l-[6px]">
          اخطار العميل
        </th>

        <th className="  h-[45px]   w-[160px] ps-4  ">
          <span className=" text-center h-full flex items-center justify-center w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
            العمليات
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default OfferPriceTH;
