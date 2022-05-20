import { useEffect, useState } from "react";

const useDebouncedValue = (stateValue: string) => {
  const [value, setValue] = useState(stateValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(stateValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [stateValue]);

  return value;
};

export default useDebouncedValue;
