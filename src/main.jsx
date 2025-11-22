import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ import router
import App from "./App";
import { CartProvider } from "./Context/CartContext"; // ✅ import cart provider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap router first */}
      <CartProvider> {/* ✅ wrap cart context inside router */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
