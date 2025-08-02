import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { svgIcons } from "@/components/shared/svgIcons";
import ModelAddNotification from "./ModelAddNotification";

const initialItems = [
  {
    id: 1,
    title: "بدايه السنة الهجريه",
    content: "السنه الهجريه من التقويم الاسلامي",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toISOString().split("T")[1].substring(0, 5),
    targetAudience: {
      a: false,
      b: false,
      c: false,
      d: false,
    },
  },
  {
    id: 2,
    title: "يوم عاشورا",
    content: "يوم عاشورا كل عام",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toISOString().split("T")[1].substring(0, 5),
    targetAudience: {
      a: false,
      b: false,
      c: false,
      d: false,
    },
  },
];

const targetAudience = [
  { value: "a", label: "الزوار الجدد" },
  { value: "b", label: "العملاء المتعاقدين" },
  { value: "c", label: "العملاء الغير متعاقدين" },
  { value: "d", label: "الفنيين" },
];

const NotificationsEndedContractsTBody = ({
  isModalOpenAddNotification,
  setIsModalOpenAddNotification,
}) => {
  const [items, setItems] = useState(initialItems);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionChange = (value) => {
    setExpandedItem(value === expandedItem ? null : value);
  };

  const handleCancel = () => {
    setExpandedItem(null);
  };
  const [newItem, setNewItem] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toISOString().split("T")[1].substring(0, 5),
    targetAudience: {
      a: false,
      b: false,
      c: false,
      d: false,
    },
  });

  const closeModalAddNotification = () => {
    setIsModalOpenAddNotification(false);
    setNewItem({
      title: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1].substring(0, 5),
      targetAudience: {
        a: false,
        b: false,
        c: false,
        d: false,
      },
    });
  };

  const handleNewItemChange = (field, value) => {
    setNewItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleNewItemCheckboxChange = (value) => {
    setNewItem((prev) => ({
      ...prev,
      targetAudience: {
        ...prev.targetAudience,
        [value]: !prev.targetAudience[value],
      },
    }));
  };

  const handleAddItemConfirm = () => {
    if (!newItem.title.trim()) {
      alert("الرجاء إدخال عنوان للعنصر الجديد");
      return;
    }

    const itemToAdd = {
      id: Date.now(),
      ...newItem,
    };

    setItems([...items, itemToAdd]);
    closeModal();
    console.log(newItem);
  };

  /* ========================================================== */
  const handleTitleChange = (id, newTitle) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  // تحديث محتوى العنصر
  const handleContentChange = (id, newContent) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  // تحديث التاريخ
  const handleDateChange = (id, newDate) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, date: newDate } : item))
    );
  };

  // تحديث الوقت
  const handleTimeChange = (id, newTime) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, time: newTime } : item))
    );
  };

  // تحديث حالة Checkbox
  const handleCheckboxChange = (id, value) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              targetAudience: {
                ...item.targetAudience,
                [value]: !item.targetAudience[value],
              },
            }
          : item
      )
    );
  };

  // حذف عنصر
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleGetItem = (item) => {
    console.log(item);
    setExpandedItem(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      <Accordion
        type="single"
        collapsible
        value={expandedItem}
        onValueChange={handleAccordionChange}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className={" bg-secondary mb-2 rounded-[6px] "}
          >
            <AccordionTrigger className={"px-4 "}>
              <h3
                className={"text-white  font-bold text-3xl text-center mx-auto"}
              >
                {item.title}
              </h3>
            </AccordionTrigger>
            <AccordionContent className={"bg-white p-4 space-y-9"}>
              {/* title */}
              <input
                value={item.title}
                onChange={(e) => handleTitleChange(item.id, e.target.value)}
                type="text"
                className="w-full bg-[#EDEDED] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              />
              {/* content */}
              <textarea
                value={item.content}
                onChange={(e) => handleContentChange(item.id, e.target.value)}
                className="w-full h-24 bg-[#EDEDED] placeholder:text-muted text-muted text-2xl font-bold rounded-md py-3 px-3 "
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              />
              {/* targetAudience */}
              <div
                className=" flex items-center gap-5 py-4 bg-[#EDEDED] rounded-md "
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="flex items-center gap-3 px-2 text-primary ">
                  <img src={svgIcons.userGroups} className="w-6 h-6" alt="" />
                  <h4>فئة الجمهور المستهدفه</h4>
                </div>

                {/* targetAudience */}
                <div className="flex flex-1 gap-5  ">
                  {targetAudience.map((targetItem) => (
                    <div
                      key={targetItem.value}
                      className="flex gap-2 items-center"
                    >
                      <Checkbox
                        id={`${item.id}-${targetItem.value}`}
                        checked={item.targetAudience[targetItem.value] || false}
                        onCheckedChange={() =>
                          handleCheckboxChange(item.id, targetItem.value)
                        }
                      />
                      <Label
                        htmlFor={`${item.id}-${targetItem.value}`}
                        className={"text-primary"}
                      >
                        {targetItem.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* date */}
              <div
                className=" flex items-center gap-5 py-4 bg-[#EDEDED] rounded-md "
                style={{
                  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="flex items-center gap-3 px-2 text-primary ">
                  <img src={svgIcons.time} className="w-6 h-6" alt="" />
                  <h4>الوقت المستهدف</h4>
                </div>

                {/* Time */}
                <div className="flex items-center">
                  <p className="text-prim">الوقت</p>
                  <input
                    type="time"
                    className="p-2 rounded text-primary"
                    value={item.time}
                    onChange={(e) => handleTimeChange(item.id, e.target.value)}
                  />
                </div>

                {/* date */}
                <div className="flex items-center">
                  <p className="text-primary">التاريخ</p>
                  <input
                    type="date"
                    className="p-2 rounded text-primary"
                    value={item.date}
                    onChange={(e) => handleDateChange(item.id, e.target.value)}
                  />
                </div>
              </div>

              <div className=" flex justify-center gap-4">
                <button
                  onClick={() => handleGetItem(item)}
                  className="h-[45px] w-[120px] disabled:bg-secondary/50 rounded-[6px] text-white font-bold bg-secondary text-2xl transition-colors duration-300 hover:bg-secondary/80"
                >
                  تأكيد
                </button>
                <button
                  onClick={handleCancel}
                  className="h-[45px] w-[120px] disabled:bg-muted/50 rounded-[6px] text-white font-bold bg-muted text-2xl transition-colors duration-300 hover:bg-muted/80"
                >
                  إلغاء
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {isModalOpenAddNotification && (
        <ModelAddNotification
          closeModal={closeModalAddNotification}
          newItem={newItem}
          isModalOpen={isModalOpenAddNotification}
          setIsModalOpen={setIsModalOpenAddNotification}
          handleNewItemChange={handleNewItemChange}
          handleNewItemCheckboxChange={handleNewItemCheckboxChange}
          handleAddItemConfirm={handleAddItemConfirm}
          targetAudience={targetAudience}
        />
      )}
    </div>
  );
};

export default NotificationsEndedContractsTBody;
