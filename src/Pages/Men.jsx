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

const Men = () => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(290);

  const products = [
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-hoodie1-300x300.jpg', title: "Anchor Bracelet", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-hoodie2-300x300.jpg', title: "Basic Gray Jeans", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt2-300x300.jpg', title: "Black Hoodie", price: 150 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans2-300x300.jpg', title: "DNK Bag", price: 130 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg', title: "Classic Bag", price: 190 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans4-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/sports-shoe4-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: '	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt4-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe2-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg', title: "Hand Bag", price: 170 },
    { imgUrl: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans3-300x300.jpg', title: "Hand Bag", price: 170 },
  ];

  return (
    <section className="bg-[#F5F7F9] min-h-screen">
      <Navbar bgColor="bg-white" textColor="text-black" logoColor="Light" />

      <StoreLayout
        breadcrumb="Men"
        pageTitle="Men"
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

export default Men;
