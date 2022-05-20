import { createContext, useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import useDebouncedValue from "../hooks/useDebouncedValue";
import useLocalSearchText from "../hooks/useLocalSearchText";
import { MAIN_API } from "../variables";
import axios from "axios";
import { StoryType } from "../types";
import { CircularProgress } from "@mui/material";
import TableList from "../components/TableList";
import "../styles/VariantTwo.css";

export const DeleteContext2 = createContext<any>(null);
export const LastStoryContext = createContext<any>(null);

const VariantTwo = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stories, setStories] = useState<Array<StoryType>>([]);

  const [searchText, setSearchText]: any = useLocalSearchText();

  const debouncedUrl = useDebouncedValue(
    MAIN_API + "query=" + searchText + "&page=" + pageNumber
  );

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setStories([]);
  }, [searchText]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: debouncedUrl,
    })
      .then((res) => {
        setStories((prevStories: any) => {
          return [...new Set<any>([...prevStories, ...res.data.hits])];
        });
        setLoading(false);
      })
      .catch((e: any) => {
        setError(true);
      });
  }, [debouncedUrl]);

  const observer = useRef<IntersectionObserver | null>();
  const lastStory = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && pageNumber < 50) {
            setPageNumber((prev) => prev + 1);
          }
        },
        { rootMargin: "-200px" }
      );
      if (node) observer.current?.observe(node);
    },
    [loading]
  );

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
    <div className="variantTwo">
      <Navbar
        searchText={searchText}
        onChange={handleSearchTextChange}
        variant={2}
      />
      {error ? (
        <h1>ERROR...</h1>
      ) : (
        <div className="variantTwoData">
          <DeleteContext2.Provider value={{ onClickDelete: handleDeleteClick }}>
            <LastStoryContext.Provider value={lastStory}>
              <TableList stories={stories} />
            </LastStoryContext.Provider>
          </DeleteContext2.Provider>
        </div>
      )}
      {loading ? (
        <CircularProgress
          size={100}
          sx={{
            padding: "100px",
            margin: "auto",
            color: "white",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default VariantTwo;
