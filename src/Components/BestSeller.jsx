import React from "react";
import IMG1 from "../assets/product-accessory1.jpg";

const BestSellers = () => {
  const sellers = [
    {
      title: "Green Hoodie",
      price: "$150.00",
      img: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg',
    },
    {
      title: "Lemons Tshirt",
      price: "$25.00 – $28.00",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-hoodie4.jpg-300x300.jpg",
    },
    {
      title: "DNK Blue Shoes",
      price: "$200.00 – $240.00",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg",
    },
    {
      title: "Red Hoodie",
      price: "$150.00",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe2-600x600.jpg",
    },
    {
      title: "Blue Denim Shorts",
      oldPrice: "$150.00",
      price: "$130.00",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt5-300x300.jpg",
    },
  ];

  return (
    <div className="border-t border-gray-200 pt-6">
      <h3 className="font-semibold mb-4 text-gray-900 text-base">
        Our Best Sellers
      </h3>
      <div className="space-y-5">
        {sellers.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-gray-100 pb-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="text-sm font-medium text-gray-800 hover:text-[#0073e6] transition-colors">
                {item.title}
              </p>
              {item.oldPrice ? (
                <p className="text-sm">
                  <span className="text-gray-400 line-through mr-1">
                    {item.oldPrice}
                  </span>
                  <span className="text-gray-700">{item.price}</span>
                </p>
              ) : (
                <p className="text-sm text-gray-700">{item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
