import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isImage = (value) =>
  typeof value === "string" &&
  (value.startsWith("blob:") ||
    value.endsWith(".png") ||
    value.endsWith(".jpg") ||
    value.endsWith(".jpeg") ||
    value.endsWith(".webp") ||
    value.endsWith(".gif") ||
    value.endsWith(".svg"));

export const totalAmount = (array) => {
  let total = 0;
  array.forEach((item) => {
    total += Number(item.price);
  });
  return total;
};

//=========================================

export const totalQuantity = (array) => {
  let total = 0;
  array.forEach((item) => {
    total += Number(item.quantity);
  });
  return total;
};

//=========================================

export const totalUnit = (array) => {
  let total = 0;
  array.forEach(() => {
    total += 1;
  });
  return total;
};

//=========================================

export const total = (price, quantity) => {
  let total = price * quantity;
  return total;
};

//========================================
export const totalAmount2 = (array) => {
  let total = 0;
  array.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });

  return total;
};

export const totalWithFee = (array) => {
  let total = 0;
  array.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });
  let fee = 0.15 * total;

  return total + fee;
};

export const formatDateForInput = (dateStr) => {
  if (!dateStr) return "";
  // Handle YYYY-MM-DD format
  if (dateStr.includes("-")) {
    const [year, month, day] = dateStr.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  // Handle DD/MM/YYYY format
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return "";
};
