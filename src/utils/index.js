import { useState, useEffect } from "react";

export const paramObj = (params) => {
  const result = { ...params };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isNull(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isNull = (value) => (value === 0 ? false : !value);

export const useMounted = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
