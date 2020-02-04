import {
  INIT_GET_PRODUCTS_ADDED,
  GET_PRODUCTS_ADDED_ERROR,
  GET_PRODUCTS_ADDED_SUCCESS
} from "../types";

const intialState = {
  fetched: false,
  loading: false,
  products: [],
  error: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case INIT_GET_PRODUCTS_ADDED:
      return {
        ...state,
        loading: action.payload
      };
    case GET_PRODUCTS_ADDED_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: false
      };
    case GET_PRODUCTS_ADDED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
