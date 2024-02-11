import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import second from "../img/1.jpg";
import three from "../img/10.jpg";
import third from "../img/2.png";
import fourth from "../img/3.png";
import fifth from "../img/4.png";
import sixth from "../img/5.jpg";
import one from "../img/6.png";
import eight from "../img/7.png";
import two from "../img/8.png";
import seventh from "../img/9.jpg";

import "./Homepage.css";

import { Pagination } from "swiper/modules";
function Homepage() {
return (
<>
    <div className="homepage-container">
    <Swiper
        direction={"vertical"}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide><img style={{width:"auto",height:"100%"}} src="https://static.toiimg.com/thumb/msid-103068370,width-1280,height-720,resizemode-4/103068370.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={second} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={third} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={fourth} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={fifth} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={sixth} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={seventh} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:"auto", height:"100%"}} src={eight} alt="" /></SwiperSlide>
    </Swiper>

    <h1 id="SuggestedContent" style={{marginTop:"80px"}}>Suggested Content</h1>
    <div  className="image-grid">
        <img  src={one} alt="Image 1" />
        <img src={two} alt="Image 2" />
        <img src={three} alt="Image 3" />
        <img src="image3.jpg" alt="Image 3" />
    </div>
    </div>
</>
);
}

export default Homepage;
