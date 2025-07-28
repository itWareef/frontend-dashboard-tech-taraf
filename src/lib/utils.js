import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isImage = (value) =>
  typeof value === 'string' &&
  (value.endsWith('.png') || value.endsWith('.jpg') || value.endsWith('.jpeg'));
