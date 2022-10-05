import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import com1 from '../../images/com-1.jpg'
import com3 from '../../images/com-3.jpg'
import com4 from '../../images/com-4.jpg'
import com5 from '../../images/com-5.jpg'
import com6 from '../../images/com-6.jpg'
import com7 from '../../images/com-7.jpg'
import com8 from '../../images/com-8.jpg'
import com9 from '../../images/com-9.jpg'
import com10 from '../../images/com-10.jpg'
import com11 from '../../images/com-11.jpg'
import com12 from '../../images/com-12.jpg'
import com13 from '../../images/com-13.jpg'
import com14 from '../../images/com-14.jpg'
import com15 from '../../images/com-15.jpg'
import com16 from '../../images/com-16.jpg'
import './style/commercialAr.css'
import HeaderAr from '../header-ar/HeaderAr';

function CommercialAr() {
  return (
    <>
    <HeaderAr/>
    <section className='commercial-ar'>
    {/* start heading */}
      <svg width="100%" height="30%">
        <defs>
          <pattern id="polka-dots" x="0" y="0"
                  patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>  
        </defs>
      <text x="50%" y="60%" text-anchor="middle"  >
        تجارى
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
        <img src={com1} alt="com 1" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com3} alt="com 3" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com4} alt="com 4" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com5} alt="com 5" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com6} alt="com 6" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com7} alt="com 7" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com8} alt="com 8" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com9} alt="com 9" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com10} alt="com 10" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com11} alt="com 11" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com12} alt="com 12" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com13} alt="com 13" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com14} alt="com 14" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com15} alt="com 15" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={com16} alt="com 16" loading='lazy' />
      </SwiperSlide>
    </Swiper>
    {/* end gallery */}
  </section>
    </>
  )
}

export default CommercialAr