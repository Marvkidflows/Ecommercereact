import React, { useState } from "react";
import { Search, X } from "lucide-react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useCart } from "../Context/CartContext";
import { useLocation, useParams } from "react-router-dom";


const DescriptionProduct = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState("description"); // ✅ controls which tab is active
 const { addToCart } = useCart(); // ✅ moved inside component
const [quantity, setQuantity] = useState(1);
const location = useLocation();
if (!location.state) {
  return <p className="text-center py-10">Product not found. Please go back.</p>;
}

const { slug } = useParams(); // from /description/:slug

  // Example product details (normally fetched or passed via props)
  const product = location.state || {
  title: "Unknown Product",
  price: 0,
  category: "N/A",
  imgUrl: "",
};
  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // ✅ Add to cart with quantity
  };

  return (
    <>
      {/* 🔍 Overlay modal for zoomed image */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsZoomed(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Enlarged image preview */}
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg"
              alt="DNK Yellow Shoes"
              className="w-[400px] h-auto object-contain rounded-md mx-auto"
            />
          </div>
        </div>
      )}

      <section className="bg-[#F5F7F9] min-h-screen">
        {/* Navbar */}
        <Navbar bgColor="bg-white" textColor="text-black" logoColor="Light" />

        {/* Main product layout */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT IMAGE */}
            <div className="relative group w-full overflow-hidden rounded-lg">
              <span className="absolute top-6 left-6 bg-white text-gray-700 px-3 py-1 rounded-full shadow text-sm font-medium z-10">
                Sale!
              </span>

              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-6 right-6 bg-white p-2 rounded-full shadow cursor-pointer hover:scale-105 transition z-10"
              >
                <Search className="w-4 h-4 text-gray-600" />
              </button>

             <img
  src={product.imgUrl || "https://via.placeholder.com/300"}
  alt={product.title}
  className="w-full h-[650px] object-contain md:object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
/>

            </div>

            {/* RIGHT INFO */}
            <div className="flex flex-col justify-start">
            <p className="text-sm text-gray-500 mb-4">
  Home / {product.category} /{" "}
  <span className="text-gray-800">{product.title}</span>
</p>

         <p className="uppercase text-gray-500 text-sm tracking-wide">
  {product.category}
</p>

<h1 className="text-3xl font-semibold text-gray-900 mt-1">
  {product.title}
</h1>

<div className="flex items-center gap-3 mt-3">
  {product.oldPrice && (
    <span className="text-gray-400 line-through text-lg">
      ${product.oldPrice}
    </span>
  )}
  <span className="text-blue-600 text-2xl font-bold">
    ${product.price}
  </span>
  <span className="text-gray-500 text-sm">+ Free Shipping</span>
</div>

              <p className="text-gray-600 leading-relaxed mt-5">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                dapibus condimentum sit amet a augue. Sed non neque elit sed.
              </p>
  <div className="flex items-center gap-4 mt-6">
            <input
  type="number"
  min={1}
  value={quantity}
  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
  className="w-16 border border-gray-300 rounded-md text-center py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-10 py-2 rounded-md font-medium hover:bg-blue-700 active:scale-95 transition-all duration-150"
              >
                ADD TO CART
              </button>
            </div>

              <div className="w-full border-t border-gray-300 mt-8"></div>

              <p className="text-gray-600 text-sm mt-4">
                Category:{" "}
                <span className="text-gray-800 font-medium">Men</span>
              </p>
            </div>
          </div>

          {/* 🔽 BELOW PRODUCT DETAILS — DESCRIPTION / REVIEWS TABS */}
         {/* 🔽 BELOW PRODUCT DETAILS — DESCRIPTION / REVIEWS TABS */}
{/* 🔽 BELOW PRODUCT DETAILS — DESCRIPTION / REVIEWS SECTION */}
<section className="mt-20 bg-[#F5F7F9]">
  {/* Top straight divider line */}
  <div className="border-t border-gray-300"></div>

  {/* Tabs header */}
  <div className="flex items-center gap-6 mt-6 px-2">
    <button
      onClick={() => setActiveTab("description")}
      className={`text-sm font-medium pb-1 ${
        activeTab === "description"
          ? "text-black border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Description
    </button>

    <button
      onClick={() => setActiveTab("reviews")}
      className={`text-sm font-medium pb-1 ${
        activeTab === "reviews"
          ? "text-black border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Reviews (0)
    </button>
  </div>

  {/* Tab content */}
  <div className="mt-10 px-2 pb-16 text-gray-700 leading-relaxed">
    {activeTab === "description" ? (
      <>
        <h2 className="text-2xl font-semibold mb-4">Product description</h2>
        <p className="mb-4">
          Since it’s creation lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </>
    ) : (
      <>
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <p className="text-gray-500 italic">There are no reviews yet.</p>
      </>
    )}
  </div>

  {/* 🔽 Product Lifestyle Images — side by side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-01.jpg"
      alt="Lifestyle product 1"
      className="w-full h-full object-cover"
    />
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-04.jpg"
      alt="Lifestyle product 2"
      className="w-full h-full object-cover"
    />
     {/* LEFT IMAGE */}
  <img
    src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-03.jpg"
    alt="Folded clothes and shoes"
    className="w-full h-[450px] object-cover"
  />

  {/* RIGHT TEXT CONTENT */}
  <div className="flex flex-col justify-center bg-white px-10 md:px-20 py-14">
    <div className="max-w-md space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Ut enim ad minim
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Quis nostrud
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Duis aute irure
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  </div>
   <div className="flex flex-col justify-center bg-white px-10 md:px-20 py-14">
    <div className="max-w-md space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Excepteur sint occaecat
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Cupidatat non proident
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Sunt in culpa
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <img
    src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-02.jpg"
    alt="Lifestyle clothing image"
    className="w-full h-[450px] object-cover"
  />
  </div>
</section>
        </div>
<section className="bg-[#F5F7F9] py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight">
      Related products
    </h2>

    {/* ✅ Left-aligned tight layout */}
    <div className="flex flex-wrap justify-start gap-6">
      <ProductCard
        imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"
        title="Sports Shoe"
        category="Men"
        price="$40.00 – $46.00"
      />

      <ProductCard
        imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt2-300x300.jpg"
        title="Blue Tshirt"
        category="Men"
        price="$40.00 – $45.00"
      />

      <ProductCard
        imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/hoodie2-300x300.jpg"
        title="Red Hoodie"
        category="Men"
        price="$150.00"
      />
    </div>
  </div>
</section>

<section className="bg- white">
<Footer/>
</section>






      </section>

    </>
  );
};

export default DescriptionProduct;
