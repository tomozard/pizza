import { ICart } from "../../interfaces";
import _ from "lodash";

interface ICartState {
  carts?: ICart[];
}

const initialCartState = {
  carts: [],
};

const cartReducer = (state: ICartState = initialCartState, action: any) => {
  switch (action.type) {
    case "ADD_CART":
      const hasInCart = _.find(state.carts, function (c) {
        return c.product._id === action.payload.product._id;
      });
      if (hasInCart) {
        hasInCart.amount++;
        const addState = {
          ...state,
          carts: state.carts?.map(
            (item) => (item.product._id !== action.payload.product._id) ?  {...hasInCart}  : {...item}
          ),
        };
        return addState;
      } else {
        const addState = {
          ...state,
          carts: [...(state.carts || []), action.payload],
        };
        return addState;
      }
    case "REMOVE_CART":
      const removeState = {
        ...state,
        carts: state.carts?.filter(
          (item) => item.product._id !== action.payload.product._id
        ),
      };
      return removeState;
    case "UPDATE_CART":
      const updateState = {
        ...state,
        carts: state.carts
          ?.filter((item) => item.product._id !== action.payload.product._id)
          .push(action.payload),
      };
      return updateState;
    case "CLEAR_CART":
      const clearState = {
        ...state,
        carts: [],
      };
      return clearState;
    case "GET_CART":
      return state.carts;
    default:
      return state;
  }
};

export default cartReducer;
