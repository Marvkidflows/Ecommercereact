import React, { useState } from "react";

import ProductCard from "../Components/ProductCard";
import BestSellers from "../Components/BestSeller";
import { FaChevronRight } from "react-icons/fa";

const StoreLayout = ({
  breadcrumb,
  pageTitle,
  description,
  products,
  minPrice,
  maxPrice,
  setMaxPrice,
}) => {
    const expandedProducts = [...products, ...products, ...products];
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;
const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;
const currentProducts = expandedProducts.slice(startIndex, endIndex);


const totalPages = Math.ceil(expandedProducts.length / productsPerPage);

console.log("Total pages:", totalPages);


  return (
    <section className="bg-[#F5F7F9] py-16">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <aside className=" p-6 h-fit space-y-10">
          {/* Search */}
          <div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 border border-gray-300 bg-white rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073e6]"
              />
              <button className="bg-[#0073e6] text-white px-3 border-1px hover:bg-blue-700 transition">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Filter by Price */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold mb-4 text-gray-900 text-base">
              Filter by Price
            </h3>
            <div className="mb-3">
              <input
                type="range"
                min="20"
                max="290"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full h-1 accent-black"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button className="bg-[#0073e6] text-white font-medium px-5 py-1 rounded text-sm hover:bg-blue-700">
                FILTER
              </button>
              <p className="text-sm text-gray-700">
                Price: ${minPrice} — ${maxPrice}
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold mb-4 text-gray-900 text-base">
              Categories
            </h3>
            <ul className="space-y-2">
              {["Accessories", "Men", "Women"].map((cat, i) => (
                <li
                  key={i}
                  className="flex justify-between text-sm text-gray-700 hover:text-[#0073e6] cursor-pointer"
                >
                  <span>{cat}</span>
                  <span className="text-gray-400">
                    {cat === "Accessories" ? "(7)" : cat === "Men" ? "(14)" : "(17)"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Sellers */}
          <div className="border-t border-gray-200 pt-6">
            <BestSellers />
          </div>
        </aside>

        {/* Main Product Section */}
        <main className="lg:col-span-3">
          <div className="bg-white rounded-md shadow-sm px-12 pt-12 pb-16">
            
            {/* Header Section */}
            <div className="mb-10">
              {/* Breadcrumb */}
            {/* Breadcrumb */}
<div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
  <a href="/" className="hover:text-gray-900">Home</a>
  <span>/</span>
  <a href="/store" className="hover:text-gray-900">Store</a>

  {/* ✅ Only show page number when currentPage > 1 */}
  {currentPage > 1 && (
    <>
      <span>/</span>
      <span className="text-gray-900 font-medium">Page {currentPage}</span>
    </>
  )}
</div>


              {/* Title */}
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                {pageTitle}
              </h2>

              {/* Description */}
              {description && (
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {/* Top Bar */}
            <div className="flex flex-wrap justify-between items-center mb-10">
           <p className="text-sm text-gray-600">
  Showing {startIndex + 1}–{Math.min(endIndex, products.length)} of {products.length} results
</p>
              <select className=" px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 ">
                <option>Default sorting</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by popularity</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {currentProducts.map((item, index) => (
  <ProductCard key={index} {...item} />
))}

            </div>

            {/* Pagination */}
  {/* Pagination Info + Buttons */}
{/* Pagination Info + Buttons */}
{/* Pagination Section */}
{/* Pagination */}
{/* Pagination */}
{/* Pagination */}
<div className="flex items-center gap-2 mt-12 justify-start w-full">
  {/* Prev Button (hidden on first page) */}
  {currentPage > 1 && (
    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      className="px-4 py-2 border rounded hover:bg-gray-100"
    >
      ←
    </button>
  )}

  {/* Page Buttons (1–3) */}
  {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`px-4 py-2 border rounded ${
        currentPage === i + 1
          ? "bg-black text-white"
          : "hover:bg-gray-100"
      }`}
    >
      {i + 1}
    </button>
  ))}

  {/* Next Button (hidden on last page) */}
  {currentPage < Math.min(totalPages, 3) && (
    <button
      onClick={() => setCurrentPage((p) => Math.min(p + 1, Math.min(totalPages, 3)))}
      className="px-4 py-2 border rounded hover:bg-gray-100"
    >
      →
    </button>
  )}
</div>




          </div>
        </main>
      </div>
    </section>
  );
};

export default StoreLayout;
