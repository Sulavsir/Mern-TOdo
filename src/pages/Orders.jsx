import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "price", headerName: "Price", type: "number", width: 150, editable: true },
];

const rows = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 49.99},
  { id: 3, name: "Product 3", price: 99.99},
  { id: 4, name: "Product 4", price: 19.99 },
  { id: 5, name: "Product 5", price: 89.99 },
];

export default function Orders() {
  return (<>
  <Navbar />
   <Box sx={{ height: 400, width: "100%", my:"10px"}}>
      <Typography variant="h3">Product List</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  </>
   
  );
}
