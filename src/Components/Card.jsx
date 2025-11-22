import React from 'react'

const Card = ( {discountInfo,button,profilePicture}) => {
  return (
    <article className="relative h-[500px] w-[360px] overflow-hidden flex-shrink-0 rounded-lg">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Background Image */}
  <img
  
    src={profilePicture}
    alt="Tank Tops"
    className="w-full h-full object-cover"
  />

  {/* Content pinned to bottom */}
  <div className="absolute inset-0 flex flex-col justify-end p-6 pb-16 text-white z-50">
    <div className="w-[85%] space-y-3">
      <h2 className="text-2xl font-bold leading-tight">
        {discountInfo}
      </h2>
      <p className="text-sm opacity-90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
      </p>
      <button className="px-6 py-2 rounded border border-white/30 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition">
        {button}
      </button>
    </div>
  </div>
</article>

  )
}

export default Card