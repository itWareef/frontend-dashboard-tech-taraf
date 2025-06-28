export default function ModelAddUnitTBody({ formik, handleCloseModel }) {
  return (
    <tbody className="">
      <tr className="h-[60px]  gap-0">
        {/* Developer */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="developer"
            name="developer"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.developer}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Project */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="project"
            name="project"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.project}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Villa Number */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="villaNumber"
            name="villaNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.villaNumber}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Unit Number */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="unitNumber"
            name="unitNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unitNumber}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Area */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="area"
            name="area"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.area}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Deed Number */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="deedNumber"
            name="deedNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deedNumber}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Delivery Date */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="deliveryDate"
            name="deliveryDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deliveryDate}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Maintenance Start */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="maintenanceStart"
            name="maintenanceStart"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maintenanceStart}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Maintenance End */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="maintenanceEnd"
            name="maintenanceEnd"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maintenanceEnd}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Client Name */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="clientName"
            name="clientName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientName}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Client Number */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          <input
            id="clientNumber"
            name="clientNumber"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clientNumber}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>

        {/* Cancel Button */}
        <td className="w-[160px] ps-3 h-[60px]">
          <div className="rounded-[6px] h-full bg-[#C8CCCC] transition-colors duration-200">
            <button
              onClick={handleCloseModel}
              className="flex items-center cursor-pointer gap-5 h-full w-full text-[27px] justify-center"
              aria-label="Cancel"
            >
              <svg
                width="20"
                height="38"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.7363 3.54631C25.458 2.67766 25.3431 1.38746 24.4744 0.665711C23.6058 -0.0560353 22.3156 0.0589332 21.5938 0.927584L12.9456 11.3067L4.29744 0.927584C3.57569 0.0589332 2.28549 -0.0560353 1.41684 0.665711C0.548191 1.38746 0.433222 2.67766 1.15497 3.54631L10.2822 14.5002L1.15497 25.4542C0.433222 26.3228 0.548191 27.613 1.41684 28.3348C2.28549 29.0565 3.57569 28.9416 4.29744 28.0729L12.9456 17.6938L21.5938 28.0729C22.3156 28.9416 23.6058 29.0565 24.4744 28.3348C25.3431 27.613 25.458 26.3228 24.7363 25.4542L15.6091 14.5002L24.7363 3.54631Z"
                  fill="#013B41"
                />
              </svg>
              إلغاء
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
