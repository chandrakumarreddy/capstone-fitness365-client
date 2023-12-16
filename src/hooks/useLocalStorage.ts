import { useState } from "react";

export default function useLocalStorage<T>(
  keyName: string,
  defaultValue: unknown = null
): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return localStorage.getItem(keyName) || defaultValue;
    }
  });
  const setValue = (newValue: T) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } finally {
      setStoredValue(newValue);
    }
  };
  return [storedValue, setValue];
}
