import { useContext } from "react";
import { DeleteContext1 } from "../pages/VariantOne";
import { TableItemProps } from "../types";
import "../styles/Table.css";
import { DeleteContext2, LastStoryContext } from "../pages/VariantTwo";
import { useLocation, useNavigate } from "react-router-dom";

const TableItem = ({ story, currIndex }: TableItemProps) => {
  const lastStory = useContext(LastStoryContext);
  let ctx1 = useContext(DeleteContext1);
  let ctx2 = useContext(DeleteContext2);
  const location = useLocation();
  const navigate = useNavigate();
  function handleTitleClick() {
    navigate(`/story`, { state: story });
  }
  return (
    <tr ref={currIndex % 20 === 0 ? lastStory : null}>
      <td onClick={handleTitleClick} className="itemTitle">
        {story?.title}
      </td>
      <td className="itemUrl">
        <a href={story?.url} target="_blank">
          {story?.url}
        </a>
      </td>
      <td>{story?.author}</td>
      <td>{story?.num_comments}</td>
      <td
        className="deleteOption"
        onClick={() => {
          if (location.pathname === "/v1") {
            return ctx1?.onClickDelete(story?.objectID);
          } else if (location.pathname === "/v2") {
            return ctx2?.onClickDelete(story?.objectID);
          }
        }}
      >
        Delete
      </td>
    </tr>
  );
};

export default TableItem;