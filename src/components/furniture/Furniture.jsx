import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper";
import furn1 from '../../images/1.jpg'
import furn2 from '../../images/2.jpg'
import furn3 from '../../images/3.jpg'
import furn4 from '../../images/4.jpg'
import furn5 from '../../images/5.jpg'
import furn6 from '../../images/6.jpg'
import furn7 from '../../images/7.jpg'
import furn8 from '../../images/8.jpg'
import furn9 from '../../images/9.jpg'
import furn10 from '../../images/10.jpg'
import furn11 from '../../images/11.jpg'
import furn12 from '../../images/12.jpg'
import furn13 from '../../images/13.jpg'
import furn14 from '../../images/14.jpg'
import furn15 from '../../images/15.jpg'
import furn16 from '../../images/16.jpg'
import furn17 from '../../images/17.jpg'
import furn18 from '../../images/18.jpg'
import furn19 from '../../images/19.jpg'
import furn20 from '../../images/20.jpg'
import furn21 from '../../images/21.jpg'
import furn22 from '../../images/22.jpg'
import furn23 from '../../images/23.jpg'
import furn24 from '../../images/24.jpg'
import furn25 from '../../images/25.jpg'
import furn26 from '../../images/26.jpg'
import furn27 from '../../images/27.jpg'
import furn29 from '../../images/29.jpg'
import furn30 from '../../images/30.jpg'
import furn31 from '../../images/31.jpg'
import furn32 from '../../images/32.jpg'
import furn33 from '../../images/33.jpg'
import furn34 from '../../images/34.jpg'
import furn35 from '../../images/35.jpg'
import furn36 from '../../images/36.jpg'
import furn37 from '../../images/37.jpg'
import furn38 from '../../images/38.jpg'
import furn39 from '../../images/39.jpg'
import furn40 from '../../images/40.jpg'
import furn41 from '../../images/41.jpg'
import furn42 from '../../images/42.jpg'
import furn43 from '../../images/43.jpg'
import furn44 from '../../images/44.jpg'
import furn45 from '../../images/45.jpg'
import furn46 from '../../images/46.jpg'
import './style/furniture.css'
import Header from '../header/Header';

function Furniture() {
  return (
    <>
    <Header/>
    <section className='furniture'>
      {/* start heading */}
      <svg width="100%" height="30%">
        <defs>
          <pattern id="polka-dots" x="0" y="0"
                  patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>  
        </defs>
      <text x="50%" y="60%" text-anchor="middle"  >
        Furniture
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
        <img src={furn1} alt="furn 1" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn2} alt="furn 2" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn3} alt="furn 3" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn4} alt="furn 4" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn5} alt="furn 5" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn6} alt="furn 6" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn7} alt="furn 7" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn8} alt="furn 8" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn9} alt="furn 9" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn10} alt="furn 10" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn11} alt="furn 11" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn12} alt="furn 12" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn13} alt="furn 13" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn14} alt="furn 14" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn15} alt="furn 15" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn16} alt="furn 16" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn17} alt="furn 17" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn18} alt="furn 18" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn19} alt="furn 19" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn20} alt="furn 20" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn21} alt="furn 21" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn22} alt="furn 22" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn23} alt="furn 23" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn24} alt="furn 24" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn25} alt="furn 25" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn26} alt="furn 26" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn27} alt="furn 27" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn29} alt="furn 29" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn30} alt="furn 30" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn31} alt="furn 31" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn32} alt="furn 32" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn33} alt="furn 33" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn34} alt="furn 34" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn35} alt="furn 35" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn36} alt="furn 36" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn37} alt="furn 37" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn38} alt="furn 38" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn39} alt="furn 39" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn40} alt="furn 40" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn41} alt="furn 41" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn42} alt="furn 42" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn43} alt="furn 43" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn44} alt="furn 44" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn45} alt="furn 45" loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={furn46} alt="furn 46" loading='lazy' />
      </SwiperSlide>
    </Swiper>
    {/* end gallery */}
    </section>
    </>
  )
}

export default Furniture