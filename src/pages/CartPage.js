import React from "react";

const CartPage = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Carrito de Compras"),
    React.createElement(
      "table",
      { style: { width: "100%", borderCollapse: "collapse", marginTop: "20px" } },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement("th", { style: { borderBottom: "2px solid #ff9900", padding: "10px" } }, "Producto"),
          React.createElement("th", { style: { borderBottom: "2px solid #ff9900", padding: "10px" } }, "Precio"),
          React.createElement("th", { style: { borderBottom: "2px solid #ff9900", padding: "10px" } }, "Cantidad")
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "Pan Bimbo"),
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "$35"),
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "1")
        ),
        React.createElement(
          "tr",
          null,
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "Leche Lala"),
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "$25"),
          React.createElement("td", { style: { padding: "10px", borderBottom: "1px solid #ddd" } }, "2")
        )
      )
    )
  );
};

export default CartPage;