import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./style.module.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';



export default function ImageSwipper({images}) {
  const [activeThumb, setActiveThumb] = useState(null)
  const thumbsSwiper = useRef(null);


  // console.log(thumbsSwiper)
  // console.log(activeThumb)
  return (
  <div className={cls.image__container}>
    <Swiper
        direction={'vertical'}
        slidesPerView={4}
        navigation={false}
        spaceBetween={10}
        keyboard={true}
        // onSwiper={setActiveThumb}
        modules={[Navigation, Mousewheel, Keyboard]}
      >
      {images && images?.map((img, i)=> (
        <SwiperSlide key={i} className={cls.swipper__slide}><img src={img} className={cls.image}/></SwiperSlide>
      ))}
      </Swiper>
      <Swiper  className={cls.main__swipper__img}>
      {images && images?.map((img, i)=> (
        <SwiperSlide key={i}><img src={img} className={cls.main__img}/></SwiperSlide>
      ))}
      </Swiper>
  </div>
  )
}
