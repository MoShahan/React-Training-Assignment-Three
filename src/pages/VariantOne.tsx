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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stories, setStories] = useState<Array<StoryType>>([]);

  const [searchText, setSearchText]: any = useLocalSearchText();

  const debouncedUrl = useDebouncedValue(
    MAIN_API + "query=" + searchText + "&page=" + (pageNumber - 1)
  );

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

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
        setStories([...new Set<any>(res.data.hits)]);
        setLoading(false);
      })
      .catch((e: any) => {
        setError(true);
        setLoading(false);
      });
  }, [debouncedUrl]);

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
      <Navbar searchText={searchText} onChange={handleSearchTextChange} variant={1}/>
      {loading ? (
        <CircularProgress
          size={100}
          sx={{
            padding: "200px",
            margin: "auto",
            color:"white"
          }}
        />
      ) : error ? (
        <h1>ERROR...</h1>
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
