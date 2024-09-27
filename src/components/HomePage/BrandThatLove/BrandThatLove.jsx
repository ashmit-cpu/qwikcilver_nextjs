"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../../styles/BrandThatLove.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import SplitType from "split-type";

function BrandThatLove({ data }) {
  const countryRef = useRef(null);
  const imgRef = useRef(null);
  const [currentCountry, setCurrentCountry] = useState();

  // Array for the rotating countries
  const countries = ["Australia", "Canada", "Germany", "Japan", "India"];

  // Array for the image contents to be mapped
  const imageSlides = [
    [
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-39.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-01-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-27.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
    ],
    [
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-41.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-41.webp",
    ],
    [
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-11-1.webp",
      "https://www.qwikcilver.com/wp-content/uploads/2024/07/Logos-41.webp",
    ],
  ];

  useEffect(() => {
    let index = 0; // Start from the first country in the array
    const interval = setInterval(() => {
      index = (index + 1) % countries.length; // Cycle through countries array
      setCurrentCountry(countries[index]); // Update the country displayed
    }, 2000); // Change every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  useEffect(() => {
    // Split text into words/characters
    const splitText = new SplitType(countryRef.current, {
      types: "words, chars",
    });

    // Animate the split text using GSAP
    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 50 }, // Start with invisible and below position
      {
        opacity: 1,
        y: 0,
        stagger: 0.05, // Delay between each character
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Rotate the globe image
    gsap.to(imgRef.current, {
      rotation: 360,
      duration: 100, // Rotate in 100 seconds
      repeat: -1, // Repeat indefinitely
      ease: "linear",
    });

    // Clean up animation and SplitType on unmount
    return () => {
      gsap.killTweensOf(splitText.chars);
      splitText.revert(); // Revert SplitType changes
    };
  }, [currentCountry]);

  return (
    <section className="BrandThatLove">
      <div className="row">
        <div className="left-col">
          {data.acf.brands_that_love_image && (
            <img
              src={data.acf.brands_that_love_image.link}
              alt="globe"
              ref={imgRef}
            />
          )}
        </div>
        <div className="right-col container sec-padding">
          {data.acf.brands_that_love_title && (
            <h2>
              {data.acf.brands_that_love_title}{" "}
              <span ref={countryRef}>{currentCountry}</span>
            </h2>
          )}

          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={1}
            speed={1}
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            {imageSlides.map((slideImages, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="slider_wrapper">
                  {slideImages.map((imageSrc, imgIndex) => (
                    <div className="img-container" key={imgIndex}>
                      <img src={imageSrc} alt={`slider-img-${imgIndex}`} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default BrandThatLove;
