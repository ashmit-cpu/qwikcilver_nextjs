"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; 
import "../../../styles/industry.css";

export default function IndustrySlides() {
  const industries = [
    {
      title: "Airlines",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1684279723.webp",
    },
    {
      title: "Automobile",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2075069911.webp",
    },

    {
      title: "Pharma",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2352614205.webp",
    },
    {
      title: "Agro-chemicals",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2346360325.webp",
    },
    {
      title: "Retail & E-commerce",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2324381599.webp",
    },
    {
      title: "BFSI",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2156710939.webp",
    },
    {
      title: "Consumer Goods",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1917230564.webp",
    },
    {
      title: "Travel",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2215306565.webp",
    },
    {
      title: "Hospitality",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2192320897-1.webp",
    },
    {
      title: "F & B",
      image:
        "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2029043648-1.webp",
    },
  ];

  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {industries.map((industry, index) => (
          <SwiperSlide>
            <div className="industry_card" key={index}>
              <div className="industry_image">
                <img src={industry.image} alt={industry.title} />
              </div>
              <div className="industry_content">
                <h3>{industry.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
