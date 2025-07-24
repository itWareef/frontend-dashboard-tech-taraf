const ContractTH = () => {
  return (
    <thead className="sticky top-0 z-10">
      <tr>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary rounded-r-[6px]">
          اسم العميل
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          مشروع
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          رقم الوحدة
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          تاريخ بداية عقد الصيانة
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          تاريخ نهاية عقد الصيانة
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl rounded-l-[6px] bg-secondary ">
          مبلغ العقد
        </th>

        <th className=" flex gap-5 ps-5">
          <span className="py-3  text-center block w-[170px] text-white font-normal text-xl bg-secondary rounded-[6px]">
            مرفقات
          </span>
          <span className="py-3 flex-1 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
            العمليات
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default ContractTH;
