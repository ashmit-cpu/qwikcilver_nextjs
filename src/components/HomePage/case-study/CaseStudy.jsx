"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../../styles/CaseStudy.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Button from "@/app/ui-element/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);


  useEffect(() => {
    const caseStudiesData = [
      {
        image: "/imgs/Lulu-1.png",
        title: "Lulu’s Multi-Country Gift Card Strategy powered by Qwikcilver",
        description:
          "A strategic collaboration with Qwikcilver by Pinelabs marked a pivotal shift, enabling Lulu to cater to its diverse customer base with an innovative solution.",
        link: "#",
      },
      {
        image: "/imgs/Nestle.png",
        title: "Another Case Study with Great Results",
        description:
          "This is an example of another business that Qwikcilver transformed with a successful strategy, driving global growth.",
        link: "#",
      },
      {
        image: "/imgs/Nestle.png",
        title: "Another Case Study with Great Results",
        description:
          "This is an example of another business that Qwikcilver transformed with a successful strategy, driving global growth.",
        link: "#",
      },
    ];

    // Set the case studies data
    setCaseStudies(caseStudiesData);
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="container mx-auto case_study">
      <h2 className="text-center">
        <span>Businesses</span> we’ve transformed.
      </h2>
      <p className="text-center mt-6">
        Delivering success for businesses across the globe one solution at a
        time.
      </p>

      <div className="flex gap-5 mt-10 px-10 w-4/5 mx-auto justify-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper relative "
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide>
              <div key={index} className="caseStudy_card">
                <div className="caseStudy_image">
                  <Image
                    src={study.image}
                    width="485"
                    height="290"
                    alt={study.title}
                    rel="noreferrer"
                  />
                </div>
                <div className="caseStudy_content">
                  <h2>
                    <a href={study.link}>{study.title}</a>
                  </h2>
                  <p>{study.description}</p>

                  <a href="" className="Case_study_btn">
                    View Case Study <FaArrowRightLong />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-prev absolute left-0 transform -translate-y-1/2 cursor-pointer text-2xl text-blue-600">
            <BsArrowLeft />
          </div>
          <div className="custom-next absolute right-0 transform -translate-y-1/2 cursor-pointer text-2xl text-blue-600">
            <BsArrowRight />
          </div>
        </Swiper>
      </div>

      <div className="flex justify-center mt-10">
        <Button content="More case studies" href="javascript:void();" />
      </div>
    </div>
  );
};

export default CaseStudy;
