const OrderTH = () => {
  return (
    <thead className="sticky top-0 z-10  ">
      <tr>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px] rounded-r-[6px]">
          رقم الطلب
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          اسم العميل
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          نوع الطلب
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          رقم الوحدة
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          مشروع
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px]">
          رقم الهاتف
        </th>
        <th className="px-4  text-center text-white font-normal text-xl bg-secondary h-[45px] rounded-l-[6px]">
          البريد الإلكتروني
        </th>
        <th className="flex w-[160px] ps-4  ">
          <span className="py-3 text-center block w-full text-white font-normal text-lg bg-secondary rounded-[6px]">
            اداره المهام
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default OrderTH;
