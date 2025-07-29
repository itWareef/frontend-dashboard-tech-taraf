import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isImage = (value) =>
  typeof value === "string" &&
  (value.endsWith(".png") || value.endsWith(".jpg") || value.endsWith(".jpeg"));

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
