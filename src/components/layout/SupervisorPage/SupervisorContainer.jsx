import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const SupervisorContainer = () => {
  const requests = Array(30).fill({
    id: 1,
    clientName: "عبدالله محمد",
    requestType: "طلب صيانة كهربائية",
    unitNumber: 19,
    project: "وريف 35",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
  });

  return (
    <div className="px-4">
      {/* Table Card */}
      <div className="bg-card h-[85vh] p-3 rounded-2xl my-3">
        {/* Table Container with scroll */}
        <div className="relative h-full">
          <div
            className="absolute inset-0 overflow-y-auto rounded-[6px] 
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
          >
            <table className="w-full border-separate border-spacing-y-6">
              {/* Table Header - Sticky */}
              <thead className="sticky top-0 z-10 ">
                <tr>
                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary rounded-r-[6px]">
                    صوره المشرف
                  </th>
                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary">
                    اسم المشرف
                  </th>
                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary">
                    عمليات الصيانة
                  </th>

                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary">
                    رقم الهاتف
                  </th>
                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary rounded-l-[6px]">
                    البريد الإلكتروني
                  </th>
                  <th className="px-4 py-3 text-center text-white font-medium text-sm bg-secondary">
                    متوسط التقييم
                  </th>
                  <th className="flex items-center justify-center px-4">
                    <span className="py-3 text-center block w-full text-white font-medium text-sm bg-secondary rounded-[6px]">
                      إدارة المهام
                    </span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="group">
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap rounded-r-[6px] transition-colors duration-200">
                      {request.id}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                      {request.clientName}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                      {request.requestType}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                      {request.unitNumber}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                      {request.project}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
                      {request.phone}
                    </td>
                    <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap rounded-l-[6px]  transition-colors duration-200">
                      {request.email}
                    </td>
                    <td className="flex items-center justify-center px-5">
                      <Select dir="rtl">
                        <SelectTrigger className="w-full py-5">
                          <SelectValue placeholder="اختر مشرف" />
                        </SelectTrigger>
                        <SelectContent>
                          {chooseSupervisorOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorContainer;
