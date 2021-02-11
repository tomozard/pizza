import { Store, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { ICart, IProduct, ILocation } from "../interfaces";
import reducers from "./reducers";

export type AppState = {
  carts: ICart[];
  product: IProduct[];
  location: ILocation[];
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Connect chrome dev tools extension for debugging
const store: Store = createStoreWithMiddleware(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;