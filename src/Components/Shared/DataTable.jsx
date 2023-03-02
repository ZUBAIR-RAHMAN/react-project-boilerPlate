import { Box } from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { useState } from "react";

function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      shape="rounded"
      variant="outlined"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
      sx={{
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "color3.main",
          color: "white",
          "&:hover": {
            color: "white",
            backgroundColor: "color3.main",
          },
        },
      }}
    />
  );
}

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

const DataTable = ({ columns = [], rows = [], isLoading = false }) => {
  const [pageSize, setPageSize] = useState(6);

  return (
    <Box sx={{ height: 635, width: "100%" }}>
      <DataGrid
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "color3.main",
            color: "white",
            textTransform: "uppercase",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          // "& .MuiDataGrid-virtualScrollerContent": {
          //   padding: "15px",
          // },
          "& .MuiDataGrid-main": {
            border: "1px solid rgba(224, 224, 224, 1)",
            marginTop: "20px",
          },
          "& .MuiDataGrid-cell": {
            border: 0,
            "&:focus": {
              outline: "none",
            },
          },
          "& .MuiDataGrid-row": {
            "&:hover": {
              backgroundColor: "unset",
            },
            "&:nth-of-type(even)": {
              backgroundColor: "color5.main",
            },
          },
          "& .MuiDataGrid-cellContent": {
            color: "textBlack",
            fontSize: "14px",
          },
        }}
        rows={rows}
        loading={isLoading}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        disableColumnFilter
        rowHeight={80}
        // hideFooterPagination
        hideFooterSelectedRowCount
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 6, 7, 10, 20, 35, 50, 70, 100, 200]}
        pagination
        components={{
          Pagination: CustomPagination,
        }}
      />
    </Box>
  );
};

export default DataTable;
