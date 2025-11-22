import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";  // ✅ make sure this import is correct

import Home from "./Pages/Home";
import Everything from "./Pages/Everything";
import WomenPage from "./Pages/WomenPage";
import Men from "./Pages/Men";
import Accessories from "./Pages/Accessories";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUs from "./Pages/ContactUs";
import DescriptionProduct from "./Components/DescriptionProduct";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/registerPage";
const App = () => {
  return (
    <CartProvider>   {/* ✅ wrap all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/accessory" element={<Accessories />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      <Route path='/description/:id' element={<DescriptionProduct />} />
      {/* < Route path="/" element = {<LoginPage/>}/>
      <Route path="register" element={<Register/>}/> */}
      </Routes>
    </CartProvider>
  );
};

export default App;
