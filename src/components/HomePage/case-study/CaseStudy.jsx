"use client";
import React, { useState, useRef, useEffect } from "react";
import "../../../styles/CaseStudy.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Button from "@/components/ui-element/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import CaseStudyCard from "./caseStudyCard"; // Make sure to import the correct component

const CaseStudy = ({ data, caseStudyData }) => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // useEffect(() => {
  //   const caseStudiesData = [
  //     {
  //       image: "/imgs/Lulu-1.png",
  //       title: "Lulu’s Multi-Country Gift Card Strategy powered by Qwikcilver",
  //       description:
  //         "A strategic collaboration with Qwikcilver by Pinelabs marked a pivotal shift, enabling Lulu to cater to its diverse customer base with an innovative solution.",
  //       link: "#",
  //     },
  //     {
  //       image: "/imgs/Nestle.png",
  //       title: "Another Case Study with Great Results",
  //       description:
  //         "This is an example of another business that Qwikcilver transformed with a successful strategy, driving global growth.",
  //       link: "#",
  //     },
  //     {
  //       image: "/imgs/Nestle.png",
  //       title: "Another Case Study with Great Results",
  //       description:
  //         "This is an example of another business that Qwikcilver transformed with a successful strategy, driving global growth.",
  //       link: "#",
  //     },
  //   ];

  //   // Set the case studies data
  //   setCaseStudies(caseStudiesData);
  // }, []);

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
      {data && (
        <h2
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: data.acf?.case_study_heading,
          }}
        />
      )}

      {data && (
        <p
          className="text-center mt-6"
          dangerouslySetInnerHTML={{
            __html: data.acf.case_study_sub_heading,
          }}
        />
      )}

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
          {caseStudyData.map((study, index) => (
            <SwiperSlide key={index}>
              <CaseStudyCard study={study} /> 
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

export default CaseStudy