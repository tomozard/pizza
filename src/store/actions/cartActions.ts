import { ICart, IProduct } from "../../interfaces";

export const addCarts = (product: IProduct) => {
  return {
    type: "ADD_CART",
    payload: { product, amount: 1 } as ICart,
  };
};

export const removeCarts = (product: IProduct) => {
  return {
    type: "REMOVE_CART",
    payload: { product } as ICart,
  };
};

export const updateCarts = (product: IProduct, amount: number) => {
  return {
    type: "UPDATE_CART",
    payload: { product, amount } as ICart,
  };
};

export const clearCarts = () => {
  return {
    type: "UPDATE_CART",
    payload: {},
  };
};

export const getCarts = () => {
  return {
    type: "GET_CART",
    payload: {},
  };
};
