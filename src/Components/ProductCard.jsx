import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from "../Context/CartContext";

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M10 1.5l2.6 5.27 5.8.84-4.2 4.09.99 5.77L10 14.77 4.81 17.47l.99-5.77L1.6 7.61l5.8-.84L10 1.5z" />
  </svg>
);

export default function ProductCard({
  imgUrl,
  title = "Product Title",
  category = "Category",
  price = "0.00",
  oldPrice,
  priceRange,
  isSale = false,
  colors = [],
  rating = 0,
}) {
  const formatPrice = (p) =>
    typeof p === "number" ? p.toFixed(2) : (p ?? "").toString();
const slug = title.toLowerCase().replace(/\s+/g, '-')
  return (
   <Link
  to={`/description/${slug}`}
  state={{ imgUrl, title, category, price, oldPrice, priceRange, colors, rating }}
>
    <div className="rounded-md overflow-hidden  ">
      {/* IMAGE SECTION */}
      <div className="relative w-[250px] h-[250px] bg-[#F7F7F7] flex items-start justify-start group">
        <img
          src={imgUrl}
          alt={title}
          className="w-[250px] h-full object-cover"
        />

        {/* Sale Badge */}
        {isSale && (
          <span className="absolute left-3 top-3 bg-white text-gray-800 border px-2 py-0.5 rounded-full text-xs font-medium shadow-sm">
            Sale!
          </span>
        )}

        {/* Shopping Bag Icon (hover only) */}
        <button className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow border border-gray-200 transition">
          <svg
            className="w-4 h-4 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
            />
          </svg>
        </button>
      </div>

      {/* INFO SECTION */}
      <div className="p-4 space-y-1">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>

        {/* Category */}
        <p className="text-xs text-gray-500">{category}</p>

        {/* Price */}
        <div className="flex items-center gap-2 text-sm">
          {priceRange ? (
            <span className="text-gray-900 font-medium">
              ${formatPrice(priceRange[0])} – ${formatPrice(priceRange[1])}
            </span>
          ) : (
            <>
              {oldPrice && (
                <span className="text-gray-400 line-through">
                  ${formatPrice(oldPrice)}
                </span>
              )}
              <span className="text-gray-900 font-medium">
                ${formatPrice(price)}
              </span>
            </>
          )}
        </div>

        {/* Color Dots */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {colors.map((color, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: color }}
                className="w-4 h-4 rounded-full border border-gray-300"
              />
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-0.5 pt-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} filled={i < Math.round(rating)} />
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
}
