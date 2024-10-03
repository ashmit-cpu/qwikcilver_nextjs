"use client";

import Link from "next/link";
import React from "react";
import "../../../styles/HeroSection.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// import SplitType from 'split-type';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function HeroSection({ data }) {
  useGSAP(() => {
    // List of texts to animate through
    const texts = ["challenges", "solutions", "ideas"];

    // Select the element using its id
    const spanElement = document.getElementById("text-anim");

    if (spanElement) {
      // GSAP animation: Loop through the texts
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      texts.forEach((text) => {
        timeline
          .to(spanElement, {
            duration: 0.5, // Animation duration
            opacity: 0.2, // Fade out current text
            onComplete: () => {
              spanElement.innerHTML = text; // Change the text
            },
          })
          .to(spanElement, { duration: 1, opacity: 1 }); // Fade in new text
      });
    }
  }, []);
  // console.log(data)
  return (
    <section className="HeroSection">
      <div className="container sec-padding">
        <div className="flex flex-row">
          <div className="col left-col">
            {data && (
              <h1
                dangerouslySetInnerHTML={{
                  __html: data.acf.hero_section_title || "",
                }}
              />
            )}
            {data && <p>{data.acf.hero_section_paragraph}</p>}
            <Link href={"#"} className="primary_btn">
              Talk to Experts
            </Link>
          </div>
          <div className="col right-col"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
