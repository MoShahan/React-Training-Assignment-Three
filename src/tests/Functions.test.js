import { act, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { EachHeader } from "../components/EachHeader";
import MyPagination from "../components/MyPagination";
import TableItem from "../components/TableItem";
import VariantOne from "../pages/VariantOne";

const setPageNumber = jest.fn();

const mockSortInfo = {
  column: "",
  direction: "none",
};

const mockOnClick = jest.fn();

const handleDeleteClick = jest.fn();

const myStories = [
  {
    title: "Batman",
    url: "www.batman.com",
    author: "Bruce Wayne",
    num_comments: 1,
    objectID: "2580",
    created_at: "no idea",
    points: 5,
  },
  {
    title: "Flash",
    url: "www.flash.com",
    author: "Barry Allen",
    num_comments: 999,
    objectID: "999",
    created_at: "no idea",
    points: 7,
  },
];

describe("Checking Click Events...", () => {
  test("MyPagination...", () => {
    // render(<MyPagination pageNumber={1} setPageNumber={setPageNumber} />);
  });
  //   render(<VariantOne />)
  //   const pageNumButton = screen.getAllByRole("listitem", { hidden: true });
  //   const pageNumButton = screen.getByRole("pagination", { hidden: true });
  screen.debug();
  //   const pageNumButton = screen.getByLabelText("Go to page 2");
  //   fireEvent.click(pageNumButton);
  //   expect(setPageNumber).toBeCalledTimes(1);

  test("EachHeader...", () => {
    render(
      <EachHeader
        column="title"
        displayName="Title"
        onClick={mockOnClick}
        sortInfo={mockSortInfo}
      />
    );
    const header = screen.getByText("⥯");
    fireEvent.click(header);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  //   test("Table Item...", () => {
  //     const wrapper = ({ children }) => (
  //       <DeleteContext1.Provider value={{ onClickDelete: handleDeleteClick }}>
  //         {children}
  //       </DeleteContext1.Provider>
  //     );
  //     render(
  //       <BrowserRouter>
  //         <TableItem stories={myStories} />
  //       </BrowserRouter>,
  //       { wrapper }
  //     );

  //     const delButton = screen.getByText("Delete");
  //     fireEvent.click(delButton);
  //     expect(handleDeleteClick).toBeCalledTimes(1);
  //   });
});

describe("Checking Change Events", () => {
  test("Search Text...", () => {
    render(<VariantOne />);
    const inputBox = screen.getByPlaceholderText("Search…");
    // const paginationNum = screen.getByText("2");
    // fireEvent.click(paginationNum)
    // const = inputBox.target.value
    // console.log(inputBox);
    const newValue = localStorage.getItem("searchText") ?? "" + "new";
    fireEvent.change(inputBox, { target: { value: newValue } });
    expect(jest.fn()).toBeCalledTimes(1);
  });
});

const storyOne = {
  title: "Learn React",
  url: "https://eprint.iacr.org/2021/1022",
  created_at: "2011-12-12",
  author: "grey-area",
  points: 1107,
  num_comments: 12,
  objectID: 1,
};

const storyTwo = {
  created_at: "2017-02-19T21:16:33.000Z",
  title: "Reflecting on one very, very strange year at Uber",
  url: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
  author: "grey-area",
  points: 4107,
  num_comments: 530,
  objectID: 3,
};

const storyThree = {
  created_at: "2021-04-05T14:04:22.000Z",
  title: "Google’s copying of the Java SE API was fair use [pdf]",
  url: "https://www.supremecourt.gov/opinions/20pdf/18-956_d18f.pdf",
  author: "pdoconnell",
  points: 4103,
  num_comments: 930,
  objectID: 4,
};

const stories = [storyOne, storyThree, storyTwo];

const setStories = jest.fn();
const setLoading = jest.fn();

jest.mock("axios");

describe("Checking API Call", () => {
  test("Resolved Promise...", async () => {
    const resolvedPromise = Promise.resolve({ data: { hits: stories } });
    axios.get.mockImplementationOnce(() => resolvedPromise);
    render(<VariantOne setStories={setStories} setLoading={setLoading} />);

    await act(() => resolvedPromise);
    expect(screen.queryByText("LOADING...")).toBeNull();
    expect(setLoading).toBeCalledTimes(1)
    expect(setStories).toBeCalledTimes(1)
  });

  test("Rejected Promise...", async () => {
    const rejectedPromise = Promise.reject({ data: { hits: stories } });
    axios.get.mockImplementationOnce(() => resolvedPromise);
    render(<VariantOne />);

    await act(() => rejectedPromise);
    expect(screen.queryByText("ERROR...")).toBeInTheDocument();
  });
});

