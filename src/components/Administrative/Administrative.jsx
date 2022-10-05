import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import admin1 from '../../images/admin-1.jpg'
import admin2 from '../../images/admin-2.jpg'
import admin3 from '../../images/admin-3.jpg'
import admin4 from '../../images/admin-4.jpg'
import admin5 from '../../images/admin-5.jpg'
import admin7 from '../../images/admin-7.jpg'
import admin8 from '../../images/admin-8.jpg'
import admin9 from '../../images/admin-9.jpg'
import admin10 from '../../images/admin-10.jpg'
import admin11 from '../../images/admin-11.jpg'
import admin12 from '../../images/admin-12.jpg'
import admin13 from '../../images/admin-13.jpg'
import admin14 from '../../images/admin-14.jpg'
import admin15 from '../../images/admin-15.jpg'
import admin16 from '../../images/admin-16.jpg'
import admin17 from '../../images/admin-17.jpg'
import admin18 from '../../images/admin-18.jpg'
import admin19 from '../../images/admin-19.jpg'
import admin20 from '../../images/admin-20.jpg'
import admin21 from '../../images/admin-21.jpg'
import admin22 from '../../images/admin-22.jpg'
import './style/administrative.css'
import Header from '../header/Header';

function Administrative() {
  return (
    <>
      <Header/>
      <section className='administrative'>
      {/* start heading */}
        <svg width="100%" height="30%">
          <defs>
            <pattern id="polka-dots" x="0" y="0"
                    patternUnits="userSpaceOnUse">
              <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
            </pattern>  
          </defs>
        <text x="50%" y="60%" text-anchor="middle"  >
          Administrative
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
          <img src={admin1} alt="admin 1" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin2} alt="admin 2" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin3} alt="admin 3" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin4} alt="admin 4" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin5} alt="admin 5" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin7} alt="admin 7" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin8} alt="admin 8" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin9} alt="admin 9" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin10} alt="admin 10" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin11} alt="admin 11" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin12} alt="admin 12" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin13} alt="admin 13" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin14} alt="admin 14" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin15} alt="admin 15" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin16} alt="admin 16" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin17} alt="admin 17" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin18} alt="admin 18" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin19} alt="admin 19" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin20} alt="admin 20" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin21} alt="admin 21" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin22} alt="admin 22" loading='lazy' />
        </SwiperSlide>
      </Swiper>
      {/* end gallery */}
      </section>
    </>
  )
}

export default Administrative