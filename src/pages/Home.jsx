import * as React from "react";
import Typography from "@mui/material/Typography";
import Product from "../components/Product";
import Grid from "@mui/material/Grid2";
import Navbar from "../components/Navbar";
import Paginate from "../components/Paginate";

function Home() {
  return (
    <>
      <Navbar />
      <Typography variant="h4" textAlign="center" my="10px">
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
      </Grid>
      <Typography variant="h4" textAlign="center" my="10px">
        Latest Products
      </Typography>
      <Grid container spacing={2} >
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
      </Grid>
      <Paginate
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 2,
          marginTop: "auto",
        }}
      />
    </>
  );
}
export default Home;
