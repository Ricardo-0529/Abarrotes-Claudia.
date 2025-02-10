import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      "nav",
      null,
      React.createElement("a", { href: "/" }, "Inicio"),
      " | ",
      React.createElement("a", { href: "/products" }, "Productos"),
      " | ",
      React.createElement("a", { href: "/cart" }, "Carrito")
    ),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement("h1", null, "Bienvenido a Abarrotes Claudia") }),
        React.createElement(Route, { path: "/products", element: React.createElement(ProductsPage) }),
        React.createElement(Route, { path: "/cart", element: React.createElement(CartPage) })
      )
    )
  );
};

export default App;