"use client";
import Navbar from "./(main)/navbar";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Pagination } from 'swiper/modules';



// import required modules
import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <Navbar />
      <>
        <section>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 w-full "
      >
        <SwiperSlide className="bg-[url('https://i.pinimg.com/originals/f4/41/d4/f441d44a4b57c927fdc427a746312cce.jpg')]">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>
        </section>

        <section>
          <div className="w-[1200] grid lg:grid-cols-6 bg-[#1E2852] mx-auto text-white text-center py-5">
            
          </div>
        </section>

        <section>
          <div className="container justify-center items-center h-100vh  px-14 py-5">
            <div className="text-center ">
              <h1> Big Brand Party</h1>
            </div>
            <div className="grid lg:grid-rows-4 mt-3">
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3 ">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
