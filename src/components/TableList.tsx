import React, { useState } from "react";
import { StoryType, TableListProps } from "../types";
import { HeadersWithSorting } from "./HeadersWithSorting";
import TableItem from "./TableItem";
import "../styles/Table.css";

export const StoriesContext = React.createContext<any>(null);

const SORT_COLUMNS: any = {
  title: (a: StoryType, b: StoryType) => a?.title?.localeCompare(b?.title),
  url: (a: StoryType, b: StoryType) => a?.url?.localeCompare(b?.url),
  author: (a: StoryType, b: StoryType) => a?.author?.localeCompare(b?.author),
  num_comments: (a: StoryType, b: StoryType) =>
    a.num_comments - b.num_comments,
};

const TableList = ({ stories }: TableListProps) => {
  

  const newStories = [...stories];
  const [sortInfo, setSortInfo] = useState({
    column: "",
    direction: "none",
  });
  newStories.sort(SORT_COLUMNS[sortInfo.column]);
  if (sortInfo.direction === "down") {
    newStories.reverse();
  }
  function handleSorting(column: "title" | "url" | "author" | "num_comments") {
    setSortInfo((prev) => {
      return { column, direction: prev.direction === "up" ? "down" : "up" };
    });
  }
  return (
      <table>
        <thead>
          <tr>
            <HeadersWithSorting
              headers={[
                ["title", "Title"],
                ["url", "URL"],
                ["author", "Author"],
                ["num_comments", "Comments"],
              ]}
              onClick={handleSorting}
              sortInfo={sortInfo}
            />
            <td className="actionHead table-headings">Action</td>
          </tr>
        </thead>
        <tbody>
          {newStories.map((story, index) => (
            <TableItem
              key={story.objectID}
              story={story}
              currIndex={index + 1}
            />
          ))}
        </tbody>
      </table>
  );
};

export default React.memo(TableList);
