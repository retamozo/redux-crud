import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleDeleteProduct } from "../../redux/actions/deleteProducts";

const ProductInfo = ({ data }) => {
  const { id, productName, productPrice } = data;

  const dispatch = useDispatch();

  const confirmDeleteProduct = id => {
    dispatch(handleDeleteProduct(id));
  };

  return (
    <TableBody>
      <TableRow>
        <TableCell align="left">{id}</TableCell>
        <TableCell align="center">{productName}</TableCell>
        <TableCell align="right">{productPrice} </TableCell>
        <TableCell align="center">
          <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => confirmDeleteProduct(id)}
          >
            Eliminar
          </button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default ProductInfo;
