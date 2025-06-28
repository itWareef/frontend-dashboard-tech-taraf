import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
const chooseSupervisorOptions = [
  {
    name: "عبدالرحمن علي",
    value: "supervisor-1",
  },
  {
    name: "سالم محمد",
    value: "supervisor-2",
  },
  {
    name: "فاطمة الزهراء",
    value: "supervisor-3",
  },
];
export default function ModelAddSupervisorTBody({
  formik,
  uploading,
  fileInputRef,
  handleFileSelect,
  removeImage,
  handleCloseModel,
}) {
  return (
    <tbody className="">
      <tr className="h-[60px]">
        {/* Added height here */}
        <td className="bg-[#C8CCCC] flex items-center justify-center rounded-r-[6px] border-l-[1px] border-secondary h-[60px]">
          {/* Image Upload Section */}
          <div className="">
            {/* Display the uploaded image */}
            {formik.values.imagePreview ? (
              <div className="relative">
                <img
                  src={formik.values.imagePreview}
                  alt="معاينة الصورة"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                {/* Button to remove the image */}
                <X
                  onClick={removeImage}
                  className="w-4 h-4 text-white rounded-full bg-destructive absolute top-0 right-0"
                />
              </div>
            ) : (
              // Upload button
              <div className="flex flex-col items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className={`p-4 rounded-lg cursor-pointer transition-colors flex flex-col items-center gap-2 ${
                    uploading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 80 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="34"
                      cy="34"
                      r="33.75"
                      fill="white"
                      stroke="#707070"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M45 46.5H24V25.5H37.5V22.5H24C22.35 22.5 21 23.85 21 25.5V46.5C21 48.15 22.35 49.5 24 49.5H45C46.65 49.5 48 48.15 48 46.5V33H45V46.5ZM33.315 41.745L30.375 38.205L26.25 43.5H42.75L37.44 36.435L33.315 41.745ZM48 22.5V18H45V22.5H40.5C40.515 22.515 40.5 25.5 40.5 25.5H45V29.985C45.015 30 48 29.985 48 29.985V25.5H52.5V22.5H48Z"
                      fill="#AAAAAA"
                    />
                  </svg>
                </label>
              </div>
            )}
          </div>
        </td>
        {/* Supervisor Name */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          {/* Added height here */}
          <input
            id="supervisorName"
            name="supervisorName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.supervisorName}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        {/* Supervisor Type */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          {/* Added height here */}
          <Select
            dir="rtl"
            onValueChange={(value) =>
              formik.setFieldValue("typeSupervisor", value)
            }
            value={formik.values.typeSupervisor}
          >
            <SelectTrigger className="w-full h-full border-0">
              <SelectValue placeholder="اختر نوع المشرف..." />
            </SelectTrigger>
            <SelectContent>
              {chooseSupervisorOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-right"
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </td>
        {/* Phone */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary h-[60px]">
          {/* Added height here */}
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        {/* Email */}
        <td className="bg-[#C8CCCC] border-l-[1px] border-secondary rounded-l-[6px] h-[60px]">
          {/* Added height here */}
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="placeholder:text-center placeholder:text-primary h-full w-full text-center rounded-r-[6px] border-0 focus:border-0 focus:ring-0 focus:outline-0 text-primary"
            placeholder="......"
          />
        </td>
        {/* Cancel */}
        <td className="w-[160px] ps-3 h-[40px]">
          {/* Added height here */}
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
