"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLayoutEffect } from "react";
import { useTransition } from "../context/transitionContext";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function App() {
  const { setIsOpen } = useTransition();

  useLayoutEffect(() => setIsOpen(false), []);
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[25rem] w-[50%] relative"
      >
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 1
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 2
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 3
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 4
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 5
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 6
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] relative bg-[#fff] rounded-xl">
          slide 7
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center absolute w-[60%] h-full">
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow ">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination mb-10"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
