"use client";

import React, { useState, useRef } from "react";
import "../../../styles/UseCases.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function UseCases() {
  const buttonsWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // To track the active button

  // Array of button labels
  const useCaseButtons = [
    "Gift Cards",
    "Store Promotions",
    "Brand Wallet",
    "Open Loop Prepaid Cards",
    "Consumer Promotions",
    "Channel Partner Loyalty",
    "Employee R&R",
    "Card Issuing Solutions",
  ];

  // Array of content for each use-case
  const contentData = [
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2346866013.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/05/gift-card.png",
      subheading: "Gift Cards",
      listItems: ["Credit and debit cards", "Forex and prepaid cards", "Credit on UPI, NCMC"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2481701645.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/05/cashier-machine-2-19.png",
      subheading: "Boost sales with customized store promotions.",
      listItems: ["Store-wide discounts", "Coupons for loyal customers", "Special in-store offers"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2337463519.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/05/wallet-money-payment-finance-wallet.png",
      subheading: "Store Promotions",
      listItems: ["Digital wallet management", "Multi-brand storage", "Quick payment integration"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1923681956.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-40.svg",
      subheading: "Open Loop Prepaid Cards",
      listItems: ["Prepaid solutions", "International acceptance", "Easy top-up facilities"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1923681956.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-40.svg",
      subheading: "Engage consumers with attractive promotions.",
      listItems: ["Promo codes", "Special product discounts", "Limited-time offers"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1923681956.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-40.svg",
      subheading: "Drive loyalty among channel partners.",
      listItems: ["Loyalty points system", "Tiered rewards", "Partner bonuses"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1923681956.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-40.svg",
      subheading: "Recognize and reward employees effectively.",
      listItems: ["Employee recognition", "Bonuses and rewards", "Custom R&R programs"],
    },
    {
      imgSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1923681956.webp",
      iconSrc: "https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-40.svg",
      subheading: "Seamless card issuance solutions for your business.",
      listItems: ["Issuance services", "Virtual and physical cards", "Secure card management"],
    },
  ];

  // Scroll Left and Right functionality
  const scrollLeft = () => {
    buttonsWrapperRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    buttonsWrapperRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set the clicked button as active
  };

  return (
    <section className="UseCases">
      <div className="container sec-padding">
        <div className="top-section">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="col sm:w-7/12">
              <h2>
                Use-cases that make a case for business <span>growth.</span>
              </h2>
            </div>
            <div className="col sm:w-4/12">
              <p>
                Qwikcilver caters to various business needs and use-cases by
                providing customised solutions that deliver results.
              </p>
            </div>
          </div>
        </div>

        <div className="btn-carousel">
          <div className="buttons-wrapper" ref={buttonsWrapperRef}>
            {useCaseButtons.map((buttonLabel, index) => (
              <button
                className={`btn-tab ${index === activeIndex ? "active" : ""}`} // Add 'active' class if the index matches the activeIndex
                key={index}
                onClick={() => handleButtonClick(index)} // Update activeIndex when button is clicked
              >
                {buttonLabel}
              </button>
            ))}
          </div>
          <div className="prev-next-btn">
            <button className="nav-btn left-btn" onClick={scrollLeft}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="nav-btn right-btn" onClick={scrollRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="content-card">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <div className="left-col sm:w-7/12">
              <div className="img-container">
                <img
                  src={contentData[activeIndex].imgSrc} // Dynamically change image based on activeIndex
                  alt="content-img"
                />
              </div>
            </div>
            <div className="right-col sm:w-5/12">
              <div className="content">
                <img
                  src={contentData[activeIndex].iconSrc} // Dynamically change icon based on activeIndex
                  alt="content-icon"
                />
                {/* Add subheading above the list */}
                <h3>{contentData[activeIndex].subheading}</h3>
                <ul>
                  {contentData[activeIndex].listItems.map((item, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCircle} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
