import { useState, useEffect } from "react";

export const paramObj = (params: any): any => {
  const result = { ...params };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isNull(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isNull = (value: unknown): boolean =>
  value === 0 ? false : !value;

export const useMounted = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export const useList = <T>(array: T[]) => {
  const [list, setList] = useState(array);
  return {
    list,
    setList,
    add: (item: T) => setList([...list, item]),
    removeIndex: (index: number) => {
      let copy = [...list]
      copy.splice(index, 1)
      setList(copy)
    },
    clear: () => setList([]),
  };
};
