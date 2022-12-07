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

  const setStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setStorage];
};
