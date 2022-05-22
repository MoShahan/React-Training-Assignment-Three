import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { EachHeader } from "../components/EachHeader";
import MyPagination from "../components/MyPagination";
import TableItem from "../components/TableItem";
import RawStory from "../pages/RawStory";
import VariantOne, { DeleteContext1 } from "../pages/VariantOne";
import VariantTwo, { DeleteContext2 } from "../pages/VariantTwo";
import {
  handleDeleteClick,
  handleTitleClick,
  mockOnClick,
  myStories,
  myStory,
  setIsFormatted,
  setPageNumber,
} from "../variables/testingVariables";

afterEach(cleanup);

const mockSortInfo = {
  column: "",
  direction: "none",
};

//================================================================================================================//
describe("Checking Click Events...", () => {
  test("MyPagination...", () => {
    render(<MyPagination pageNumber={1} setPageNumber={setPageNumber} />);
    const pageNumButton = screen.getByLabelText("Go to page 2");
    fireEvent.click(pageNumButton);
    expect(setPageNumber).toBeCalledTimes(1);
  });

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

  test("V1 Table Item Delete...", () => {
    const wrapper = ({ children }) => (
      <DeleteContext1.Provider value={{ onClickDelete: handleDeleteClick }}>
        {children}
      </DeleteContext1.Provider>
    );
    render(
      <MemoryRouter initialEntries={[{ pathname: "/v1" }]}>
        <TableItem stories={myStories} />
      </MemoryRouter>,
      { wrapper }
    );

    const delButton = screen.getByText("Delete");
    fireEvent.click(delButton);
    expect(handleDeleteClick).toBeCalledTimes(1);
  });

  test("V2 Table Item Delete...", () => {
    const wrapper = ({ children }) => (
      <DeleteContext2.Provider value={{ onClickDelete: handleDeleteClick }}>
        {children}
      </DeleteContext2.Provider>
    );
    render(
      <MemoryRouter initialEntries={[{ pathname: "/v2" }]}>
        <TableItem stories={myStories} />
      </MemoryRouter>,
      { wrapper }
    );

    const delButton = screen.getByText("Delete");
    fireEvent.click(delButton);
    expect(handleDeleteClick).toBeCalledTimes(1);
  });

  test("Format Button", () => {
    render(
      <BrowserRouter>
        <RawStory setIsFormatted={setIsFormatted} />
      </BrowserRouter>
    );
    const formatButton = screen.getByRole("button");
    fireEvent.click(formatButton);
    expect(formatButton).toBeEnabled();
  });

  test("Title Click...", () => {
    render(
      <BrowserRouter>
        <TableItem story={myStory} handleTitleClick={handleTitleClick} />
      </BrowserRouter>
    );
    const titleInfo = screen.getByText("Shahan");
    fireEvent.click(titleInfo);
  });
});

//================================================================================================================//
describe("Checking Change Events", () => {
  test("V1 Search Text...", () => {
    render(<VariantOne />);
    const inputBox = screen.getByPlaceholderText("Search…");
    fireEvent.change(inputBox, { target: { value: "TESTING" } });
  });

  test("V2 Search Text...", () => {
    render(<VariantTwo />);
    const inputBox = screen.getByPlaceholderText("Search…");
    fireEvent.change(inputBox, { target: { value: "CHECKING" } });
  });
});
