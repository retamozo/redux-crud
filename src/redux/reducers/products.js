import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: false
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
}
