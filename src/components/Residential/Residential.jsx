import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import res1 from '../../images/res-1.jpg'
import res2 from '../../images/res-2.jpg'
import res3 from '../../images/res-3.jpg'
import res4 from '../../images/res-4.jpg'
import res5 from '../../images/res-5.jpg'
import res6 from '../../images/res-6.jpg'
import res7 from '../../images/res-7.jpg'
import res8 from '../../images/res-8.jpg'
import res9 from '../../images/res-9.jpg'
import res10 from '../../images/res-10.jpg'
import res11 from '../../images/res-11.jpg'
import res12 from '../../images/res-12.jpg'
import res13 from '../../images/res-13.jpg'
import res14 from '../../images/res-14.jpg'
import res15 from '../../images/res-15.jpg'
import res16 from '../../images/res-16.jpg'
import './style/residential.css'
import Header from '../header/Header';

function Residential() {
  return (
    <>
    <Header/>
    <section className='residential'>
      {/* start heading */}
        <svg width="100%" height="30%">
          <defs>
            <pattern id="polka-dots" x="0" y="0"
                    patternUnits="userSpaceOnUse">
              <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
            </pattern>  
          </defs>
        <text x="50%" y="60%" text-anchor="middle"  >
          Residential
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
          <img src={res1} alt="res 1" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res2} alt="res 2" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res3} alt="res 3" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res4} alt="res 4" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res5} alt="res 5" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res6} alt="res 6" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res7} alt="res 7" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res8} alt="res 8" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res9} alt="res 9" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res10} alt="res 10" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res11} alt="res 11" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res12} alt="res 12" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res13} alt="res 13" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res14} alt="res 14" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res15} alt="res 15" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={res16} alt="res 16" loading='lazy' />
        </SwiperSlide>
      </Swiper>
      {/* end gallery */}
    </section>
    </>
  )
}

export default Residential