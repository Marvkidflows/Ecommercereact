import React from 'react'

const Discount  = () => {
  return (
   <section className="mt-32 ml-3 mr-3">
  <div
    className='bg-[linear-gradient(to_right,#2A7CB2,transparent),url("https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg")] 
    min-h-[80vh] 
    bg-center 
    bg-no-repeat 
    bg-cover 
    bg-fixed 
    mx-auto  
    shadow-lg 
    flex items-center'
  >
    {/* Content Box */}
    <div className='flex flex-col space-y-6 max-w-xl pl-12 text-white'>
      <h4 className="text-sm uppercase">Limited Time Offer</h4>
      <h2 className="text-4xl font-bold">Special Edition</h2>
      <p className="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <h3 className="text-lg font-semibold">
        Buy This T-shirt At 20% Discount, Use Code OFF20
      </h3>
      <div>
        <button className=  "  bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
        Shop now
      </button>
      </div>
      
    </div>
  </div>
</section>


  
  )
}

export default Discount 