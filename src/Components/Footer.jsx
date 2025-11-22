import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-white mt-16">
      {/* Top Footer Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">
        
        {/* Quick Links */}
        <div>
          <h3 className=" text-[1.3rem] font-[600] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[1rem]">
            <li>Home</li>
            <li>About</li>
            <li>My Account</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* For Her */}
        <div>
          <h3 className="text-[1.3rem] font-[600] mb-4">For Her</h3>
          <ul className="space-y-2 text-[1rem]">
            <li>Women Jeans</li>
            <li>Tops and Shirts</li>
            <li>Women Jackets</li>
            <li>Heels and Flats</li>
            <li>Women Accessories</li>
          </ul>
        </div>

        {/* For Him */}
        <div>
          <h3 className="text-[1.3rem] font-[600] mb-4">For Him</h3>
          <ul className="space-y-2 text-[1rem]">
            <li>Men Jeans</li>
            <li>Men Shirts</li>
            <li>Men Shoes</li>
            <li>Men Accessories</li>
            <li>Men Jackets</li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-[1.3rem] font-[600] mb-4">For Him</h3>
          <img 
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" 
            alt="Download on Playstore" 
            className="w-32"
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-4 px-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-sm">
        <p>Copyright © 2025 marvkidflows</p>
        <p>Powered by marvkidflows</p>
      </div>
    </footer>
  )
}

export default Footer