"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "../../../styles/HeroSection.css";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function HeroSection({ data }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["challenges", "solutions", "ideas"];
  const spanRef = useRef(null);

  useEffect(() => {
   // Make sure to access the ref only after the component has mounted
   const animateText = () => {
    if (spanRef.current) {
      const initialText = spanRef.current.textContent; // Save initial text
      const allWords = [initialText, ...words]; // Combine initial text with words
      spanRef.current.innerHTML = allWords[currentIndex];
      
      // Split the text into characters
      const splitText = new SplitType(spanRef.current, { types: "chars" });
      const chars = splitText.chars;

      // Animate characters
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          rotateX: 360,
          rotateY: 90,
          y: 50,
        },
        {
          duration: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          onComplete: () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % allWords.length);
          },
        }
      );
    }
  };

  // Start the animation
  animateText();

  // Set an interval to change words
  const interval = setInterval(() => {
    if (spanRef.current) {
      animateText();
    }
  }, 3000); // Change words every 3 seconds

  

    // Video frames preloading

    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    const frames = {
      currentIndex: 0,
      maxIndex: 931,
    };

    let imagesLoaded = 0;
    const images = [];

    function preloadImages() {
      for (var i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `video_frames/frame_${i
          .toString()
          .padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = imageUrl;
        // console.log(img)
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            // console.log("All images loaded");
            loadImage(frames.currentIndex);
            startAnimation();
          }
        };
        images.push(img);
      }
    }

    function loadImage(index) {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];

        // Check if the image is loaded and has valid width/height properties
        if (img && img.complete && img.width > 0 && img.height > 0) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
          const scale = Math.max(scaleX, scaleY);

          const newWidth = img.width * scale;
          const newHeight = img.height * scale;

          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = "high";
          context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          frames.currentIndex = index;
        } else {
          console.error(
            `Image at index ${index} is not fully loaded or invalid`
          );
        }
      }
    }

    function startAnimation() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: 2,
          // markers: true,
        },
      });

      tl.to(frames, {
        currentIndex: frames.maxIndex,
        ease: "none",
        onUpdate: function () {
          loadImage(Math.floor(frames.currentIndex));
        },
      });
    }

    // Ensure this runs on client-side only
    if (typeof window !== "undefined") {
      preloadImages();
    }

    // Text content display animation (left column)
    gsap.to(".HeroSection .content", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".HeroSection .content", // Start when the HeroSection is in view
        start: "90% center", // Adjust when the animation starts (when HeroSection hits center of viewport)
        end: "150% 100%", // Adjust when the animation ends
        scrub: 2, // Smooth scroll
        // markers: true, // Optional: can be removed in production
      },
    });
  }, []);

  return (
    <section className="HeroSection relative">
      <div className="sec-padding content container flex flex-row">
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

      <div className=" w-full">
        <div className="parent relative top-0 left-0 w-full h-[700vh]">
          <div className="w-full cnav sticky top-0 left-0 h-screen">
            <canvas className="w-full h-screen" id="frame"></canvas>
          </div>
        </div>
      </div>
      <div className="video_wrapper"></div>
    </section>
  );
}

export default HeroSection;
