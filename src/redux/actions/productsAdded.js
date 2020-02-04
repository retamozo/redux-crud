import {
  INIT_GET_PRODUCTS_ADDED,
  GET_PRODUCTS_ADDED_ERROR,
  GET_PRODUCTS_ADDED_SUCCESS
} from "../types";
import AXIOS_CLIENT from "../../config/axios";

export const getProductsAdded = products => {
  return async dispatch => {
    dispatch(getProducts());
    try {
      const response = await AXIOS_CLIENT.get("/products");
      dispatch(getProductsSuccess(response.data));
    } catch {
      dispatch(getProductsError());
    }
  };
};

const getProducts = () => ({
  type: INIT_GET_PRODUCTS_ADDED,
  payload: true
});

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_ADDED_SUCCESS,
  payload: products
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ADDED_ERROR,
  payload: false
});
