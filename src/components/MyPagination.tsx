import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { MyPaginationType } from "../types";

const MyPagination = ({ pageNumber, setPageNumber }: MyPaginationType) => {

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    setPageNumber(value);
  }

  return (
    <Pagination
    //   sx={{
    //     transform: "scale(1.4)",
    //   }}
      count={50}
      siblingCount={1}
      boundaryCount={1}
      size="large"
      // role="pagination"
      showFirstButton
      showLastButton
      page={pageNumber}
      onChange={handlePageChange}
      renderItem={(item) => {
        return (
          <PaginationItem
            sx={{
              color: "black",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "green" },
            }}
            {...item}
          />
        );
      }}
    />
  );
};

export default MyPagination;
