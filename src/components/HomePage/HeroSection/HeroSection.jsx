"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "../../../styles/HeroSection.css";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function HeroSection({ data }) {
  useEffect(() => {
    // WordTransition class implementation
    class WordTransition {
      currentIndex = 0;

      constructor(target, words) {
        this.target = typeof target === "string" ? document.querySelector(target) : target;
        if (this.target) {
          this.initialText = this.target.textContent; // Save initial text
          words.unshift(this.initialText); // Insert the initial text once
          this.words = words;
          this.nextWord = this.nextWord.bind(this);
          this.animate();
        }
      }

      nextWord() {
        this.currentIndex = this.currentIndex >= this.words.length - 1 ? 0 : this.currentIndex + 1;
        this.target.innerHTML = this.words[this.currentIndex];
        this.animate();
      }

      animate() {
        // Split the target element into individual characters
        let splitText = new SplitType(this.target, {
          types: "chars",
        });

        let chars = splitText.chars;
        let textAnimation = gsap.timeline({
          repeat: 0,
          onComplete: this.nextWord,
        });

        // Animate each character
        textAnimation.fromTo(
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
          }
        );
      }
    }

    // Initialize WordTransition
    const spanElement = document.getElementById("text-anim");
    if (spanElement) {
      new WordTransition(spanElement, ["challenges", "solutions", "ideas"]);
    }

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
