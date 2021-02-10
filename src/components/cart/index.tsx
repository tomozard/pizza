import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ICart, IProduct } from "../../interfaces";
// Material UI
import { Grid, Typography } from "@material-ui/core";
import { createStore, combineReducers, Store } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import type {AppState} from "../../store/store"

interface Props {}

const Index = (props: Props) => {
  const cart: ICart[] = useSelector((state: AppState) => state.carts);

  useEffect(() => {
    console.log('get Cart', cart);
  }, [cart]);
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        ตะกร้าสินค้า
      </Typography>
    </div>
  );
};

export default Index;
