import React from "react";
import ProductForm from "../ProductForm";

const NewProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <ProductForm
              title="Create a new Product"
              buttonActiionTitle="Add product"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
