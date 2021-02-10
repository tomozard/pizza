import { ICart } from "../../interfaces";
import _ from "lodash";

interface ICartState {
  carts?: ICart[];
}

const initialCartState: ICart[] = [];

const cartReducer = (state: ICart[] = initialCartState, action: any) => {
  switch (action.type) {
    case "ADD_CART":
      const hasInCart = _.find(state, function (c) {
        return c.product._id === action.payload.product._id;
      });
      if (hasInCart) {
        hasInCart.amount++;
        const filterState = state.filter((item) => item.product._id !== action.payload.product._id);
        const addState = [...(filterState || []), hasInCart];
        return addState;
      } else {
        const addState = [...(state || []), action.payload];
        return addState;
      }
    case "REMOVE_CART":
      const removeState = state.filter(
        (item) => item.product._id !== action.payload.product._id
      );
      return removeState;
    case "UPDATE_CART":
      const hasUpdate = _.find(state, function (c) {
        return c.product._id === action.payload.product._id;
      });
      if (hasUpdate) {
        const filterState = state.filter((item) => item.product._id !== action.payload.product._id);
        const updateState = [...(filterState || []), hasUpdate];
        return updateState;
      }else{
        return state;
      }
    case "CLEAR_CART":
      return [];
    case "GET_CART":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
