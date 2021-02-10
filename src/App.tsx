// React
import React from "react";
import { Provider } from 'react-redux'
import store from './store/store'
// Material UI
import { Button, Container } from "@material-ui/core";
// Component
import Product from "./components/product"

function App() {
  return (
    <Provider store={store}>
      <Container fixed>
        <Product>
          
        </Product>
      </Container>
    </Provider>
  );
}

export default App;
