import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import AXIOS_CLIENT from "../../config/axios";
import Swal from "sweetalert2";

export const createNewProduct = product => {
  return async dispatch => {
    dispatch(addProduct());
    try {
      await AXIOS_CLIENT.post("/products", product);
      dispatch(addProductSucces(product));
      Swal.fire(
        "The product has been added correctly",
        "You'll see the products in the products table",
        "success"
      );
    } catch (error) {
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Somethin was wrong",
        text: "Please, try againg later"
      });
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
