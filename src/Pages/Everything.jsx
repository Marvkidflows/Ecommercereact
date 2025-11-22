import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import StoreLayout from "../Components/StoreLayout";

import Logo from "../assets/dnk-logo.png"

const Everything = () => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(290);

  const products = [
  { imgUrl: '	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-600x600.jpg', title: "Anchor Bracelet", price: 150, category: "Accessories"  },
  { imgUrl: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg", title:"", price: 150, category: "Women" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-hoodie1-600x600.jpg', title: "Black Hoodie", price: 150, category: "Men" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag2-600x600.jpg', title: "DNK Bag", price: 130, category: "Accessories" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg', title: "Classic Bag", price: 190, category: "Accessories" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg', title: "Hand Bag", price: 170, category: "Accessories" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-hoodie2-300x300.jpg', title: "Gray Hoodie", price: 150, category: "Men" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt2-300x300.jpg', title: "Blue Hoodie", price: 150, category: "Men" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg', title: "Women Jeans", price: 150, category: "Women" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag4-300x300.jpg', title: "Casual Jeans", price: 150, category: "Women" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg', title: "Casual Jeans", price: 150, category: "Women" },
  { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory3-300x300.jpg', title: "Casual Jeans", price: 150, category: "Women" },
];



  return (
    <section className="bg-[#F5F7F9] min-h-screen">
      <Navbar bgColor="bg-white" textColor="text-black"  logoColor="light" />
      <StoreLayout
        breadcrumb="Store"
        products={products}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <Footer />
    </section>
  );
};

export default Everything;
