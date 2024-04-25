import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Ecommercestore } from "./Store/Ecommercestore.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import ProductsDisplay from "./pages/ProductsDisplay.jsx";
import Home from "./pages/Home.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/ProductsDisplay", Component: ProductsDisplay },
      { path: "/Cart", Component: Cart },
      { path: "/Products/:id", Component: Product },
      { path: "/Checkout", Component: Checkout },
    ],
  },
  { path: "*", Component: ErrorPage },
]);
root.render(
  <React.StrictMode>
    <Ecommercestore>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Ecommercestore>
  </React.StrictMode>
);
