import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import productApi from "../../services/api/productApi";
// Material UI
import { Grid, Typography } from "@material-ui/core";
//Component
import List from "./list";

interface Props {}

const Index = (props: Props) => {
  const [products, loading, error, fetchData] = useApi(
    productApi.getProduct,
    []
  );

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        รายการสินค้า
      </Typography>
      {loading ? (
        <div>fetching...</div>
      ) : error ? (
        <div>Fetch Error</div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.product_id}>
              <List product={product}></List>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Index;
