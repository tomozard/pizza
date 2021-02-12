// React
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
// Material UI
import { Grid, Container } from "@material-ui/core";
// Component
import Product from "./components/product";
import Cart from "./components/cart";
import Location from "./components/location";
function App() {
  return (
    <Provider store={store}>
      <Container style={{ padding: "12px 24px" }}>
        <Grid container spacing={2}>
          <Grid item xs={9} style={{ borderRight: "1px dashed #ccc" }}>
            <Product></Product>
          </Grid>
          <Grid item xs={3}>
            <Cart></Cart>
          </Grid>
          <Grid item xs={12}>
            <Location></Location>
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
