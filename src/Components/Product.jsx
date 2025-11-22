import React from 'react'
import ProductCard from './ProductCard'
import Discount from './Discount'
import QualityProduct from './QualityProduct'

const Product = () => {
  return (
    <section className="bg-[#F5F7F9] min-h-[320vh] py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Featured Products
          </h2>
          {/* Blue underline */}
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* DNK Yellow Shoes */}
          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"
            title="DNK Yellow Shoes"
            category="Men"
            price="120.00"
            oldPrice="150.00"
            isSale={true}
            rating={0}
          />

          {/* DNK Blue Shoes */}
          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg"
            title="DNK Blue Shoes"
            category="Men"
            priceRange="$200.00 - $240.00"
            colors={['#3B82F6', '#10B981', '#EF4444']}
            rating={0}
          />

          {/* Dark Brown Jeans */}
          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg"
            title="Dark Brown Jeans"
            category="Men"
            price="150.00"
            rating={0}
          />

          {/* Blue Denim Jeans */}
          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg"
            title="Blue Denim Jeans"
            category="Women"
            price="150.00"
            rating={0}
          />

          {/* Basic Gray Jeans */}
          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg"
            title="Basic Gray Jeans"
            category="Women"
            price="150.00"
            rating={0}
          />

         <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg"
            title="DNK Yellow Shoes"
            category="Men"
            price="120.00"
            oldPrice="150.00"
            isSale={true}
            rating={0}
          />

        <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-300x300.jpg"
            title="DNK Blue Shoes"
            category="Men"
            priceRange="$200.00 - $240.00"
            colors={['#3B82F6', '#10B981', '#EF4444']}
            rating={0}
          />

          <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"
            title="DNK Blue Shoes"
            category="Men"
            priceRange="$200.00 - $240.00"
            colors={['#3B82F6', '#10B981', '#EF4444']}
            rating={0}
          />

           <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-300x300.jpg"
            title="Dark Brown Jeans"
            category="Men"
            price="150.00"
            rating={0}
          />

           <ProductCard
            imgUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg"
            title="DNK Blue Shoes"
            category="Men"
            priceRange="$200.00 - $240.00"
            colors={['#3B82F6', '#10B981', '#EF4444']}
            rating={0}
          />
        </div>
      </div>

      <div>
        <Discount/>
        <QualityProduct/>
      </div>


    </section>
  )
}

export default Product
