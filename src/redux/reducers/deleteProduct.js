import {
  GET_PRODUCT_TO_DELETE,
  PRODUCT_DELETED_SUCCESS,
  PRODUCT_DELETED_ERROR
} from "../types/index";

const initialState = {
  productDeleted: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case GET_PRODUCT_TO_DELETE:
      return {
        ...state,
        productDeleted: action.payload
      };
  }
}
