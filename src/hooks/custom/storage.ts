import { useEffect, useState } from "react";

export function initializer<T>(key: string, initialValue: T) {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value) as T;
  localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
}

export default function useStorage<T>(key: string, initialValue: T) {
  const [item, setItem] = useState<T>(() => initializer<T>(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));

    return () => {};
  }, [key, item]);

  return [item, setItem] as const;
}
