import { svgIcons } from "@/components/shared/svgIcons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { Link } from "react-router-dom";

const SettingsMenu = () => {
  const [selectedValues, setSelectedValues] = useState({
    mode: "light",
    time: "12:45 PM",
    date: "ميلادي",
    language: "العربية",
  });

  const handleSelectChange = (key, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const menuItems = [
    {
      title: "تعديل بيانات المستخدمين",
      icon: svgIcons.udateUser,
      hasChevron: true,
      isUpdate: true,
      path: "/users",
    },
    {
      title: "الإشعارات",
      icon: svgIcons.notificationsIconS,
      hasChevron: true,
      isUpdate: true,
      path: "/notifications",
    },

    {
      title: "بنود الصيانة",
      icon: svgIcons.maintance,
      hasChevron: true,
      isUpdate: true,
    },
    {
      title: "طلبات إضافة الوحدات",
      icon: svgIcons.builds,
      hasChevron: true,
      isUpdate: false,
      path: "/add-unit-requests",
    },

    {
      title: "بنود الزراعة",
      icon: svgIcons.plant,
      hasChevron: true,
      isUpdate: true,
    },

    {
      title: "استعراض المشاريع",
      icon: svgIcons.builds,
      hasChevron: true,
      isUpdate: false,
      path: "/project-overview",
    },
  ];

  const statusItems = [
    {
      title: "المظهر",
      key: "mode",
      icon: svgIcons.mode,
      options: [
        { value: "light", label: "فاتح" },
        { value: "dark", label: "ظلام" },
      ],
    },
    {
      title: "الوقت",
      key: "time",
      icon: svgIcons.time,
      options: [
        { value: "12:45 PM", label: "12:45 PM" },
        { value: "1:00 PM", label: "1:00 PM" },
        { value: "2:30 PM", label: "2:30 PM" },
      ],
    },
    {
      title: "التاريخ",
      key: "date",
      icon: svgIcons.time,
      options: [
        { value: "ميلادي", label: "ميلادي" },
        { value: "هجري", label: "هجري" },
      ],
    },
    {
      title: "اللغة",
      key: "language",
      icon: svgIcons.language,
      options: [
        { value: "العربية", label: "العربية" },
        { value: "English", label: "English" },
      ],
    },
  ];

  return (
    <section className=" container  mx-auto flex justify-center items-center h-[calc(100vh-200px)]">
      <div className=" w-full grid gird-cols-1 md:grid-cols-2 gap-4 ">
        {/* Menu Items */}
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className="block">
            <div className="flex bg-white text-xl md:text-2xl lg:text-3xl font-bold shadow rounded-[6px] items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-7 h-7" alt={item.title} />
                <span className="text-primary">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                {item.isUpdate && (
                  <img src={svgIcons.editIcon} className="w-7 h-7" alt="Edit" />
                )}
                {item.hasChevron && (
                  <img
                    src={svgIcons.arrowLeftS}
                    className="w-7 h-7"
                    alt="Navigate"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
        {statusItems.map((item, index) => (
          <div
            key={index}
            className="flex bg-white text-xl md:text-2xl  lg:text-3xl font-bold shadow rounded-[6px] items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3 ">
              <img src={item.icon} className="w-7 h-7" alt="users" />
              <span className="text-primary">{item.title}</span>
            </div>
            <div className="">
              <Select
                value={selectedValues[item.key]}
                onValueChange={(value) => handleSelectChange(item.key, value)}
                dir="rtl"
              >
                <SelectTrigger className="bg-secondary w-36 [&_svg:not([class*='text-'])]:text-primary [&_svg:not([class*='text-'])]:size-6 text-white border-secondary hover:bg-secondary focus:ring-secondary h-8 rounded-[6px] px-3 text-lg font-bold">
                  <SelectValue placeholder="اختر" />
                </SelectTrigger>
                <SelectContent>
                  {item.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span>{option.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SettingsMenu;
