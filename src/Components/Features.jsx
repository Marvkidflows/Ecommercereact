import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';

import Card from './Card'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Features = () => {
  return (
   <section className="min-h-[100vh] mt-20 ">
  <div className="mx-auto mt-5 justify-center relative">
            {/* Left Arrow */}
                <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-50 bg-slate-100 hover:bg-[#0A1F24] text-white p-4 rounded-full shadow-lg transition-all duration-500">
                <FaAngleLeft />
                </button>

                {/* Right Arrow */}
                <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-50 bg-slate-100 hover:bg-[#0A1F24] text-white p-4 rounded-full shadow-lg transition-all duration-500">
                <FaAngleRight />
                </button>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                modules={[Autoplay, Navigation]}
                speed={3000}
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 15 },
                600: { slidesPerView: 2, spaceBetween: 15 },
                740: { slidesPerView: 3, spaceBetween: 15 },
                800: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 15 },
                1280: { slidesPerView: 5, spaceBetween: 30 },
                }}
            >
                

                {/* Example Slides */}
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
<div className='flex flex-wrap gap-4 justify-center items-end max-w-8xl mx-auto p-4 mt-20'>
  {/* Card 1: Tank Tops */}
      <Card
      profilePicture={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg"}
      discountInfo={"20% OFF ON TANK TOPS"}
     
      button={"Shop Now"}
      />


  {/* Card 2: Eyewear */}
  
 <Card
      profilePicture={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg"}
      discountInfo={"Latest Eyewear For You"}
     
      button={"Shop Now"}
      />
  {/* Card 3: Suits */}
   <Card
      profilePicture={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg"}
      discountInfo={"Let's Lorem Suit Up!"}
   
      button={"Check Out"}
      />
</div>


</section>

  )
}

export default Features