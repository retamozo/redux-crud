import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/actions";

const FormProduct = ({ title, buttonActiionTitle, buttonCallback }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const dispatch = useDispatch();
  const addNewProduct = product => dispatch(addProduct(product));

  const handleSubmit = e => {
    e.preventDefault();
    addNewProduct({
      productName,
      productPrice
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4 font-weight-bold">{title}</h2>
      <div className="form-group">
        <label>Product name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name of product"
          name="name"
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Product price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Price of product"
          name="price"
          value={productPrice}
          onChange={e => setProductPrice(Number(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
        onClick={buttonCallback}
      >
        {buttonActiionTitle}
      </button>
    </form>
  );
};

export default FormProduct;
