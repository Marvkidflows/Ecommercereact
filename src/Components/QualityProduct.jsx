import React from 'react'

const QualityProduct = () => {
  return (
    <section className="mt-36 flex justify-center">
      <div className="grid grid-cols-4 gap-x-8 text-center max-w-5xl w-full">
        
        <div className="flex flex-col space-y-3 items-center">
          <img 
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" 
            alt="Worldwide Shipping" 
            className="w-14 h-14 mb-4"
          />
          <h3 className="font-semibold text-lg">Worldwide Shipping</h3>
          <p className="text-gray-600 text-sm">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <img 
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" 
            alt="Best Quality" 
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Best Quality</h3>
          <p className="text-gray-600 text-sm">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <img 
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" 
            alt="Best Offers" 
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Best Offers</h3>
          <p className="text-gray-600 text-sm">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <img 
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" 
            alt="Secure Payments" 
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Secure Payments</h3>
          <p className="text-gray-600 text-sm">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

      </div>
    </section>
  )
}

export default QualityProduct