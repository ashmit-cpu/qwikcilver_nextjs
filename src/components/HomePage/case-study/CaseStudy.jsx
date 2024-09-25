"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../../styles/CaseStudy.css";
import { FaArrowRightLong } from "react-icons/fa6";


const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);

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
    ];

    // Set the case studies data
    setCaseStudies(caseStudiesData);
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
        {caseStudies.map((study, index) => (
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
                View Case Study  <FaArrowRightLong />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
