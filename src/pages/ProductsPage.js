import React from "react";

const ProductsPage = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Nuestros Productos"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Producto 1 - $10"),
      React.createElement("li", null, "Producto 2 - $20"),
      React.createElement("li", null, "Producto 3 - $30")
    )
  );
};

export default ProductsPage;