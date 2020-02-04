import React from "react";

const Error = ({ titleError, descriptionError }) => (
  <div>
    <p className="alert alert-danger p2 mt-4 text-center">{titleError}</p>
    <p>{descriptionError}</p>
  </div>
);
export default Error;
