// React
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
// Material UI
import { Grid, Container } from "@material-ui/core";
// Component
import Product from "./components/product";
import Cart from "./components/cart"
function App() {
  return (
    <Provider store={store}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9} style={{borderRight: '1px dashed #ccc'}}>
            <Product></Product>
          </Grid>
          <Grid item xs={3}>
            <Cart></Cart>
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
