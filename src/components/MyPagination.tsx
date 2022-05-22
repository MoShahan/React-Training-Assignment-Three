import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { MyPaginationType } from "../types";

const MyPagination = ({ pageNumber, setPageNumber }: MyPaginationType) => {
  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    setPageNumber(value);
  }

  return (
    <Pagination
      count={50}
      siblingCount={1}
      boundaryCount={1}
      size="large"
      showFirstButton
      showLastButton
      page={pageNumber}
      onChange={handlePageChange}
      renderItem={(item) => {
        let colorTheme = "rgba(214,204,216,0.8)";
        let transformValue = "scale(1)";
        let fontSize = "0.9rem";
        if (
          item.type === "page" &&
          item.page?.toLocaleString() === pageNumber.toLocaleString()
        ) {
          colorTheme = "#78B060";
          transformValue = "scale(1.2)";
          fontSize = "1.1rem";
        }
        return (
          <PaginationItem
            sx={{
              color: colorTheme,
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(214,204,216,0.4)" },
              margin: "10px",
              fontWeight: "bolder",
              transform: transformValue,
              fontSize: fontSize,
            }}
            {...item}
          />
        );
      }}
    />
  );
};

export default MyPagination;
