import Grid from "@mui/material/Grid2";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import NavBar from "../components/Navbar";

function Products() {
  return (
    <>
      <NavBar />
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
export default Products;
