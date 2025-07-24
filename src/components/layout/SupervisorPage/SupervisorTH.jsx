const SupervisorTH = () => {
  return (
    <thead className="sticky top-0 z-10 ">
      <tr>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary rounded-r-[6px]">
          صورة المشرف
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          اسم المشرف
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          عمليات الصيانة
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          رقم الهاتف
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          البريد الإلكتروني
        </th>
        <th className="px-4 py-3 text-center text-white font-normal h-[45px] text-xl bg-secondary">
          متوسط التقييم
        </th>
        <th className="px-4 py-3 border-r border-r-muted text-center text-white font-normal h-[45px] text-xl bg-secondary rounded-l-[6px]">
          الطلبات
        </th>

        <th className="flex  w-[160px] ps-4  ">
          <span className="py-3 text-center block w-full text-white font-normal text-xl bg-secondary rounded-[6px]">
            العمليات
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default SupervisorTH;
