import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ICart, IProduct } from "../../interfaces";
// Material UI
import { Grid, Typography } from "@material-ui/core";
import { createStore, combineReducers, Store } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import type { AppState } from "../../store/store";
//Component
import List from "./list";
import _ from "lodash";

interface Props {}

const Index = (props: Props) => {
  const carts: ICart[] = useSelector((state: AppState) => state.carts);

  useEffect(() => {
    console.log("Cart Update", carts, carts.length);
  }, [carts]);
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        ตะกร้าสินค้า
      </Typography>
      <Grid container spacing={2}>
        {carts.length > 0 &&
          _.orderBy(carts, ['id']).map((cart, index) => (
            <Grid item xs={12} key={cart.id}>
              <List cart={cart}></List>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Index;
