import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import MyPagination from "../components/MyPagination";
import Navbar from "../components/Navbar";
import TableList from "../components/TableList";
import useDebouncedValue from "../hooks/useDebouncedValue";
import useLocalSearchText from "../hooks/useLocalSearchText";
import { StoryType } from "../types";
import { CircularProgress } from "@mui/material";
import { MAIN_API } from "../variables";
import "../styles/VariantOne.css";

export const DeleteContext1 = createContext<any>(null);

const VariantOne = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const [searchText, setSearchText]: any = useLocalSearchText();

  const debouncedUrl = useDebouncedValue(
    MAIN_API + "query=" + searchText + "&page=" + (pageNumber - 1)
  );

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stories, setStories] = useState<Array<StoryType>>([]);

  useEffect(() => {
    setStories([]);
  }, [debouncedUrl]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: debouncedUrl,
    })
      .then((res) => {
        // console.log(res);
        setStories([...new Set<any>(res.data.hits)]);
        setLoading(false);
      })
      .catch((e: any) => {
        setError(true);
      });
  }, [debouncedUrl]);

  // console.log("Stories ==", stories);

  const handleDeleteClick = useCallback(
    (objectId: number) => {
      const filteredStories = stories.filter((story: any) => {
        return story.objectID !== objectId;
      });
      setStories(filteredStories);
    },
    [stories]
  );

  return (
    <div className="variantOne">
      <Navbar searchText={searchText} onChange={handleSearchTextChange} />
      {loading ? (
        <CircularProgress
          size={100}
          sx={{
            padding: "200px",
            margin: "auto",
          }}
        />
      ) : error ? (
        <div>ERROR...</div>
      ) : (
        <div className="variantOneData">
          <DeleteContext1.Provider value={{ onClickDelete: handleDeleteClick }}>
            <TableList stories={stories} />
          </DeleteContext1.Provider>
          <MyPagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
      )}
    </div>
  );
};

export default VariantOne;
