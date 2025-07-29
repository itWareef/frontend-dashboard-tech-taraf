const ModelAddSupervisorTH = ({ handleSubmit }) => {
  return (
    <thead>
      <tr>
        <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-r-[6px] ">
          صورة المشرف
        </th>
        <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
          اسم المشرف
        </th>
        <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
          نوع المشرف
        </th>
        <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] ">
          رقم الهاتف
        </th>
        <th className="px-4  text-center text-white font-normal text-sm bg-secondary h-[45px] rounded-l-[6px] ">
          البريد الإلكتروني
        </th>
        <th className="w-[160px] ps-4   ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-3 flex cursor-pointer text-center gap-3 items-center justify-center w-full text-white font-normal text-[27px] bg-secondary rounded-[6px]"
          >
            <svg
              width="20"
              height="38"
              viewBox="0 0 31 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.945801 32.4425H30.9458V37.0217H0.945801V32.4425ZM10.8029 26.2606L0.945801 15.7285L5.23151 11.3782L10.8029 17.3312L26.6601 0.388184L30.9458 4.96737L10.8029 26.2606Z"
                fill="white"
              />
            </svg>
            حفظ
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default ModelAddSupervisorTH;
