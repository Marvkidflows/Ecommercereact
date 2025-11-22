import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import StoreLayout from "../Components/StoreLayout";
import Footer from "../Components/Footer";


const WomenPage = () => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(290);

  const products = [
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-300x300.jpg', title: "Anchor Bracelet", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg', title: "Basic Gray Jeans", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag2-300x300.jpg', title: "Black Hoodie", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg', title: "DNK Bag", price: 130 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg', title: "Classic Bag", price: 190 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag4-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory3-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe5-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt3-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt7-300x300.jpg', title: "Hand Bag", price: 170 },
  ];

  return (
    <section className="bg-[#F5F7F9] min-h-screen">
      <Navbar bgColor="bg-white" textColor="text-black" logoColor="Light" />

      <StoreLayout
        breadcrumb="Women"
        pageTitle="Women"
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

export default WomenPage;
