import {
  GET_PRODUCT_TO_DELETE,
  PRODUCT_DELETED_SUCCESS,
  PRODUCT_DELETED_ERROR
} from "../types";
import AXIOS_CLIENT from "../../config/axios";

export const handleDeleteProduct = id => {
  return async dispatch => {
    await dispatch(getProductToDelete(id));
    console.log("id", id);
  };
};

const getProductToDelete = id => ({
  type: GET_PRODUCT_TO_DELETE,
  payload: id
});
