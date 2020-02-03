import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

export const createNewProduct = product => {
  return dispatch => {
    dispatch(addProduct());
    try {
      dispatch(addProductSucces(product));
    } catch (error) {
      dispatch(addProductError(true));
    }
  };
};

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
});
const addProductSucces = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});
const addProductError = state => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
});
