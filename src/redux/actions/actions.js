import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

export const addProduct = product => {
  return () => {
    console.log(product);
  };
};
