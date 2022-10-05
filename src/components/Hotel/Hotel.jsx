import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import hotel1 from '../../images/hotel-1.jpg'
import hotel2 from '../../images/hotel-2.jpg'
import hotel3 from '../../images/hotel-3.jpg'
import hotel4 from '../../images/hotel-4.jpg'
import hotel5 from '../../images/hotel-5.jpg'
import hotel6 from '../../images/hotel-6.jpg'
import hotel7 from '../../images/hotel-7.jpg'
import hotel8 from '../../images/hotel-8.jpg'
import hotel9 from '../../images/hotel-9.jpg'
import hotel10 from '../../images/hotel-10.jpg'
import './style/hotel.css'
import Header from '../header/Header';

function Hotel() {
  return (
    <>
    <Header/>
    <section className='hotel'>
    {/* start heading */}
      <svg width="100%" height="30%">
        <defs>
          <pattern id="polka-dots" x="0" y="0"
                  patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>  
        </defs>
      <text x="50%" y="60%" text-anchor="middle"  >
        Hotel
      </text>
    </svg>
    {/* end heading */}
    {/* start gallery */}
      <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={hotel1} alt="hotel 1" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel2} alt="hotel 2" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel3} alt="hotel 3" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel4} alt="hotel 4" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel5} alt="hotel 5" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel6} alt="hotel 6" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel7} alt="hotel 7" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel8} alt="hotel 8" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel9} alt="hotel 9" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hotel10} alt="hotel 10" loading='lazy' />
      </SwiperSlide>
    </Swiper>
    {/* end gallery */}
  </section>
    </>
  )
}

export default Hotel