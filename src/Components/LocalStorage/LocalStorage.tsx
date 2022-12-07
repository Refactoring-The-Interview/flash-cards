import { useState, useEffect } from "react";
// localStorage.clear()

function getStorageValue(key: any, defaultValue: any) {
  const saved = localStorage.getItem(key) as any;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: any, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
