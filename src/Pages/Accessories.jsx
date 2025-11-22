import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import StoreLayout from "../Components/StoreLayout";
import Footer from "../Components/Footer";
import IMG1 from "../assets/product-accessory1.jpg";
import IMG2 from "../assets/product-accessory2.jpg";
import IMG3 from "../assets/product-accessory3-300x300.jpg";
import IMG4 from "../assets/product-bag2.jpg";
import IMG5 from "../assets/product-bag3.jpg";
import IMG6 from "../assets/product-bag4.jpg";

const Accessories = () => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(290);

  const products = [
    { imgUrl: IMG1, title: "Anchor Bracelet", price: 150 },
    { imgUrl: IMG2, title: "Basic Gray Jeans", price: 150 },
    { imgUrl: IMG3, title: "Black Hoodie", price: 150 },
    { imgUrl: IMG4, title: "DNK Bag", price: 130 },
    { imgUrl: IMG5, title: "Classic Bag", price: 190 },
    { imgUrl: IMG6, title: "Hand Bag", price: 170 },
  ];

  return (
    <section className="bg-[#F5F7F9] min-h-screen">
      <Navbar bgColor="bg-white" textColor="text-black" logoColor="Light" />

      <StoreLayout
        breadcrumb="Accessories"
        pageTitle="Accessories"
        description="Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        products={products}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <Footer />
    </section>
  );
};

export default Accessories;
