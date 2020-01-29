import React from "react";

const FormNewProduct = () => {
  return (
    <form>
      <div className="form-group">
        <label>Product name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name of product"
          name="name"
        />
      </div>
      <div className="form-group">
        <label>Product price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Price of product"
          name="price"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
      >
        Add new product
      </button>
    </form>
  );
};

export default FormNewProduct;
