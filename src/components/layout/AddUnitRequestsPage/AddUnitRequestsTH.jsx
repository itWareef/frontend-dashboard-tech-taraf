const AddUnitRequestsTH = () => {
  return (
    <thead className="sticky top-0 z-10 ">
      <tr>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary rounded-r-[6px]">
          صورة العميل
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          اسم العميل
        </th>

        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          رقم الوحده
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          اسم المشروع
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          الحي
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          رقم الهاتف
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          البريد الإلكتروني
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary rounded-l-[6px]">
          حاله الطلب
        </th>

        <th className="flex ps-4  ">
          <span className="py-3 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
            العمليات
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default AddUnitRequestsTH;
