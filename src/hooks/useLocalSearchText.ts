import { useEffect, useRef, useState } from "react";

const useLocalSearchText = () => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem("searchText") ?? ""
  );

  const firstRender = useRef(false);

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
      return;
    }
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  return [searchText, setSearchText];
};

export default useLocalSearchText;
