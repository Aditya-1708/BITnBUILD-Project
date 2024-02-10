import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>

    <h1 id="SuggestedContent" style={{marginTop:"80px"}}>Suggested Content</h1>
    <div  className="image-grid">
        <img  src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image3.jpg" alt="Image 4" />
    </div>
    </div>
</>
);
}

export default Homepage;
