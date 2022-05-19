import { render } from "@testing-library/react";
import { EachHeader } from "../components/EachHeader";
import TableItem from "../components/TableItem";
import TableList from "../components/TableList";
import MyPagination from "../components/MyPagination";
import { BrowserRouter } from "react-router-dom";

const setPageNumber = jest.fn();

const myStory = {
  title: "Shahan",
  url: "www.shahan.com",
  author: "Batman",
  num_comments: 27,
  objectID: "100",
};

const myStory1 = {
  title: "Batman",
  url: "www.batman.com",
  author: "Bruce Wayne",
  num_comments: 1,
  objectID: "2580",
  created_at: "no idea",
  points: 5,
};

const myStory2 = {
  title: "Flash",
  url: "www.flash.com",
  author: "Barry Allen",
  num_comments: 999,
  objectID: "999",
  created_at: "no idea",
  points: 7,
};

const myStories = [myStory, myStory1, myStory2];

// const myStories = ["123","456"]

const mockOnClick = jest.fn();

// const headerProps = {
//   column: "title",
//   displayName: "Title",
//   onClick: mockOnClick,
//   sortInfo: {
//     column: "",
//     direction: "none",
//   },
// };

const mockSortInfo = {
  column: "",
  direction: "down",
};

describe("Rendering the Components...", () => {
  test("Each Header 1...", () => {
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

  test("Each Header 2...", () => {
    const mockSortInfo = {
      column: "title",
      direction: "up",
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

  test("Each Header 3...", () => {
    const mockSortInfo = {
      column: "title",
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
        <TableItem stories={myStories} />
      </BrowserRouter>
    );
  });

  test("Table List...", () => {
    render(<TableList story={myStory} currIndex={7} />);
  });

  test("MyPagination...", () => {
    render(<MyPagination pageNumber={27} setPageNumber={setPageNumber} />);
  });
});
