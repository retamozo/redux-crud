import React from "react";
import FormNewProduct from "./FormNewProduct";

const NewProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>
            <FormNewProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
