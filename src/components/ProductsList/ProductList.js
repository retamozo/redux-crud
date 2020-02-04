import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProductInfo from "./ProductInfo";
import Error from "../Error";
import { getProductsAdded } from "../../redux/actions/productsAdded";
import { useSelector, useDispatch } from "react-redux";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

// const createData = (nameProduct, price, action) => ({
//   nameProduct,
//   price,
//   action
// });

// const rows = [
//   createData("Frozen yoghurt", 159, "action"),
//   createData("Ice cream sandwich", 237, "action"),
//   createData("Eclair", 262, "action"),
//   createData("Cupcake", 305, "action"),
//   createData("Gingerbread", 356, "action")
// ];

const ProductList = () => {
  const dispatch = useDispatch();

  // const classes = useStyles();
  useEffect(() => {
    const getProductsData = () => dispatch(getProductsAdded());
    getProductsData();
  }, []);
  const productsData = useSelector(state => state.productsList.products[0]);
  const isLoading = useSelector(state => state.productsList.loading);
  const isError = useSelector(state => state.productsList.error);
  console.log("isLoadgin", isLoading);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        {isLoading && <CircularProgress />}
        {productsData ? (
          productsData.map(productInfo => (
            <ProductInfo key={productInfo.id} data={productInfo} />
          ))
        ) : (
          <Error titleError="There are not products" />
        )}
      </Table>
    </TableContainer>
  );
};

export default ProductList;
