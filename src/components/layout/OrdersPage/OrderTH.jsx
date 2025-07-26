const OrderTH = () => {
  return (
    <thead className="bg-card sticky top-0 z-10">
      <tr>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px] rounded-r-[6px]">
          رقم الطلب
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          اسم العميل
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          بند الصيانة
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          رقم الوحدة
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          مشروع
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          الوقت المناسب
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          التاريخ
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          رقم الهاتف
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          البريد الإلكتروني
        </th>
        <th className="px-4 border-r border-r-muted  text-center text-white font-normal text-xl bg-secondary h-[45px] rounded-l-[6px]">
          المرفقات
        </th>
        <th className="flex w-[210px] ps-4  ">
          <span className="py-3 text-center block w-full text-white font-normal text-lg bg-secondary rounded-[6px]">
            اداره المهام
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default OrderTH;
