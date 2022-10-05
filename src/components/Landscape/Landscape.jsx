import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import land1 from '../../images/land-1.jpg'
import land2 from '../../images/land-2.jpg'
import land3 from '../../images/land-3.jpg'
import land4 from '../../images/land-4.jpg'
import land5 from '../../images/land-5.jpg'
import land6 from '../../images/land-6.jpg'
import land7 from '../../images/land-7.jpg'
import land8 from '../../images/land-8.jpg'
import land9 from '../../images/land-9.jpg'
import land10 from '../../images/land-10.jpg'
import land11 from '../../images/land-11.png'
import land12 from '../../images/land-12.png'
import land13 from '../../images/land-13.png'
import land14 from '../../images/land-14.png'
import land15 from '../../images/land-15.png'
import land16 from '../../images/land-16.png'
import land17 from '../../images/land-17.png'
import land18 from '../../images/land-18.png'
import land19 from '../../images/land-19.png'
import land20 from '../../images/land-20.png'
import land21 from '../../images/land-21.png'
import land22 from '../../images/land-22.png'
import land23 from '../../images/land-23.png'
import land24 from '../../images/land-24.png'
import './style/landscape.css'
import Header from '../header/Header';

function Landscape() {
  return (
    <>
    <Header/>
    <section className='landscape'>
    {/* start heading */}
      <svg width="100%" height="30%">
        <defs>
          <pattern id="polka-dots" x="0" y="0"
                  patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>  
        </defs>
      <text x="50%" y="60%" text-anchor="middle"  >
        Landscape
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
        <img src={land1} alt="land 1" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land2} alt="land 2" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land3} alt="land 3" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land4} alt="land 4" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land5} alt="land 5" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land6} alt="land 6" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land7} alt="land 7" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land8} alt="land 8" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land9} alt="land 9" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land10} alt="land 10" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land11} alt="land 11" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land12} alt="land 12" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land13} alt="land 13" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land14} alt="land 14" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land15} alt="land 15" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land16} alt="land 16" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land17} alt="land 17" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land18} alt="land 18" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land19} alt="land 19" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land20} alt="land 20" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land21} alt="land 21" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land22} alt="land 22" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land23} alt="land 23" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={land24} alt="land 24" loading='lazy' />
      </SwiperSlide>
    </Swiper>
    {/* end gallery */}
  </section>
    </>
  )
}

export default Landscape