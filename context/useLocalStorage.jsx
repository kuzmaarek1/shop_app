/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(null);

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const value = window.localStorage.getItem(key);

    if (value) {
      try {
        const parsed = JSON.parse(value);
        setStoredValue(parsed);
      } catch (error) {
        console.log(error);
        setStoredValue(initialValue);
      }
    } else {
      setStoredValue(initialValue);
    }
  }, []);

  useEffect(() => {
    if (storedValue !== null) {
      setValue(storedValue);
    }
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
