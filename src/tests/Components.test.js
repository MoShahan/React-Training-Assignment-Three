import { cleanup, render } from "@testing-library/react";
import { EachHeader } from "../components/EachHeader";
import TableItem from "../components/TableItem";
import TableList from "../components/TableList";
import MyPagination from "../components/MyPagination";
import { BrowserRouter } from "react-router-dom";
import {
  mockOnClick,
  myStories,
  myStory,
  setPageNumber,
} from "../variables/testingVariables";

afterEach(cleanup)

describe("Rendering the Components...", () => {
  test("Each Header...", () => {
    const mockSortInfo = {
      column: "",
      direction: "down",
    };

    render(
      <EachHeader
        column="title"
        displayName="Title"
        onClick={mockOnClick}
        sortInfo={mockSortInfo}
      />
    );
  });

  test("Table Item...", () => {
    render(
      <BrowserRouter>
        <TableItem story={myStory} />
      </BrowserRouter>
    );
  });

  test("Table List...", () => {
    render(
      <BrowserRouter>
        <TableList stories={myStories} currIndex={7} />
      </BrowserRouter>
    );
  });

  test("MyPagination...", () => {
    render(<MyPagination pageNumber={27} setPageNumber={setPageNumber} />);
  });

});
