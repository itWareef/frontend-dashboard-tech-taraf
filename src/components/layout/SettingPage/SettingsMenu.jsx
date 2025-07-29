import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Check,
  ChevronLeft,
  ChevronsUpDown,
  Clock,
  Globe,
  Leaf,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const SettingsMenu = () => {
  const [selectedValues, setSelectedValues] = useState({
    developer: "متاح",
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
      title: "طلبات إضافة الوحدات",
      icon: <BarChart3 className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
    {
      title: "تعديل بيانات المستخدمين",
      icon: <Users className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
    {
      title: "بنود الصيانة",
      icon: <Wrench className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
    {
      title: "بنود الزراعة",
      icon: <Leaf className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
    {
      title: "الإشعارات",
      icon: <Sparkles className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
    {
      title: "استعراض المشاريع",
      icon: <BarChart3 className="w-5 h-5 text-teal-600" />,
      hasChevron: true,
    },
  ];

  const statusItems = [
    {
      title: "المطور",
      key: "developer",
      icon: <Wrench className="w-5 h-5 text-teal-600" />,
      options: [
        { value: "متاح", label: "متاح" },
        { value: "غير متاح", label: "غير متاح" },
        { value: "مشغول", label: "مشغول" },
      ],
    },
    {
      title: "الوقت",
      key: "time",
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      options: [
        { value: "12:45 PM", label: "12:45 PM" },
        { value: "1:00 PM", label: "1:00 PM" },
        { value: "2:30 PM", label: "2:30 PM" },
      ],
    },
    {
      title: "التاريخ",
      key: "date",
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      options: [
        { value: "ميلادي", label: "ميلادي" },
        { value: "هجري", label: "هجري" },
      ],
    },
    {
      title: "اللغة",
      key: "language",
      icon: <Globe className="w-5 h-5 text-teal-600" />,
      options: [
        { value: "العربية", label: "العربية" },
        { value: "English", label: "English" },
        { value: "Français", label: "Français" },
      ],
    },
  ];

  return (
    <div className="w-[50%]  mx-auto grid gird-cols-1 md:grid-cols-2 gap-4 ">
      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex bg-white shadow items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-gray-800 font-medium">{item.title}</span>
          </div>
          {item.hasChevron && <ChevronLeft className="w-5 h-5 text-gray-400" />}
        </div>
      ))}

      {/* Divider */}
      {/* <div className="h-2 bg-gray-100"></div> */}

      {statusItems.map((item, index) => (
        <div
          key={index}
          className="flex bg-white items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-gray-800 font-medium">{item.title}</span>
          </div>
          <div className="w-32">
            <Select
              value={selectedValues[item.key]}
              onValueChange={(value) => handleSelectChange(item.key, value)}
              dir="rtl"
            >
              <SelectTrigger className="bg-teal-600 text-white border-teal-600 hover:bg-teal-700 focus:ring-teal-500 h-8 rounded-full px-3 text-sm font-medium">
                <SelectValue />
                <ChevronsUpDown className="h-4 w-4 opacity-50" />
              </SelectTrigger>
              <SelectContent
                className="bg-white border border-gray-200 rounded-md shadow-lg"
                dir="rtl"
              >
                {item.options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="cursor-pointer hover:bg-gray-50 focus:bg-teal-50 focus:text-teal-900"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{option.label}</span>
                      {selectedValues[item.key] === option.value && (
                        <Check className="h-4 w-4 text-teal-600" />
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsMenu;
