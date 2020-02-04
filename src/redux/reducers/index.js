import { combineReducers } from "redux";
import products from "./products";
import productsList from "./productsList";
import deleteProduct from "./deleteProduct";

export default combineReducers({
  products: products,
  productsList: productsList,
  deleteProduct: deleteProduct
});
