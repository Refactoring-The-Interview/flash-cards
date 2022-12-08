import { useState } from "react";

export function getStorageValue(key: string, defaultValue: any) {
  const saved = localStorage.getItem(key) as any;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  const setStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setStorage];
};
