import React from "react";

const ProductsPage = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Nuestros Productos"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "🍞 Pan Bimbo - $35"),
      React.createElement("li", null, "🥛 Leche Lala - $25"),
      React.createElement("li", null, "🍪 Galletas Oreo - $20"),
      React.createElement("li", null, "🍎 Manzanas (1kg) - $30")
    )
  );
};

export default ProductsPage;