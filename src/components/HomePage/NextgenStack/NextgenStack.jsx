"use client";

import React, { useState } from "react";
import "../../../styles/NextgenStack.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function NextgenStack() {
  const [selectedButton, setSelectedButton] = useState("button-1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="NextgenStack">
      <div className="wrapper">
        <div className="flex sm:flex-row flex-col">
          <div className="left-col sm:w-7/12 container sec-padding">
            <div className="content">
              <h2>
                Next-gen <span>stacks.</span>
                <br /> For next-gen <span>businesses.</span>
              </h2>
              <p>
                Acquire, retain and engage customers, employees, and partners,
                with customised solutions built for scale.
              </p>
            </div>

            <div className="buttons-wrapper">
              <div className="button">
                <button
                  onClick={() => handleButtonClick("button-1")}
                  className={selectedButton === "button-1" ? "active" : ""}
                >
                  <img
                    src="https://www.qwikcilver.com/wp-content/uploads/2024/07/credit-card-4-68.svg"
                    alt="button 1"
                  />
                  <p>Prepaid Stack</p>
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => handleButtonClick("button-2")}
                  className={selectedButton === "button-2" ? "active" : ""}
                >
                  <img
                    src="https://www.qwikcilver.com/wp-content/uploads/2024/07/share-code-code-angle-programming-share.svg"
                    alt="button 2"
                  />
                  <p>Engagement & Loyalty Stack</p>
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => handleButtonClick("button-3")}
                  className={selectedButton === "button-3" ? "active" : ""}
                >
                  <img
                    src="https://www.qwikcilver.com/wp-content/uploads/2024/07/loop-media-loop-media-playlist-music-video-entertainment-arrow-1.svg"
                    alt="button 3"
                  />
                  <p>Open Loop Prepaid Stack</p>
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => handleButtonClick("button-4")}
                  className={selectedButton === "button-4" ? "active" : ""}
                >
                  <img
                    src="https://www.qwikcilver.com/wp-content/uploads/2024/07/credit-card-4-68.svg"
                    alt="button 4"
                  />
                  <p>Card Issuing Stack for Banks</p>
                </button>
              </div>
            </div>

            <div
              className="button-content"
              data-aos="fade"
              data-aos-duration="1000"
            >
              {/* Conditional rendering based on the selectedButton state */}
              {selectedButton === "button-1" && <Section1 />}
              {selectedButton === "button-2" && <Section2 />}

              {selectedButton === "button-3" && <Section3 />}
              {selectedButton === "button-4" && <Section4 />}
            </div>
          </div>
          <div className="right-col sm:w-4/12">
            {selectedButton === "button-1" && (
              <img
                src="https://www.qwikcilver.com/wp-content/uploads/2024/07/image-asset.jpeg"
                alt="Illustration of next-gen stacks for businesses"
              />
            )}
            {selectedButton === "button-2" && (
              <img
                src="https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_1837500943.webp"
                alt="Illustration of next-gen stacks for businesses"
              />
            )}
            {selectedButton === "button-3" && (
              <img
                src="https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2262340029-1.webp"
                alt="Illustration of next-gen stacks for businesses"
              />
            )}
            {selectedButton === "button-4" && (
              <img
                src="https://www.qwikcilver.com/wp-content/uploads/2024/07/shutterstock_2382325595-1.webp"
                alt="Illustration of next-gen stacks for businesses"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="Section1">
      <ul>
        <li><FontAwesomeIcon icon={faCircle} />Brand Wallet</li>
        <li><FontAwesomeIcon icon={faCircle} />Refunds </li>
        <li><FontAwesomeIcon icon={faCircle} />Gift Cards</li>
        <li><FontAwesomeIcon icon={faCircle} />Store Promotions</li>
      </ul>
    </div>
  );
}
function Section2() {
  return (
    <div className="Section2">
      <ul>
        <li><FontAwesomeIcon icon={faCircle} />Channel partner loyalty programs</li>
        <li><FontAwesomeIcon icon={faCircle} />Consumer promotion campaigns</li>
        <li><FontAwesomeIcon icon={faCircle} />Employee R&R programs</li>
        <li><FontAwesomeIcon icon={faCircle} />Sales and influencer incentive programs</li>
      </ul>
    </div>
  );
}
function Section3() {
  return (
    <div className="Section3">
      <ul>
        <li><FontAwesomeIcon icon={faCircle} />Expense Management cards</li>
        <li><FontAwesomeIcon icon={faCircle} />Food Cards</li>
        <li><FontAwesomeIcon icon={faCircle} />Fuel Cards</li>
        <li><FontAwesomeIcon icon={faCircle} />Travel Cards</li>
      </ul>
    </div>
  );
}
function Section4() {
  return (
    <div className="Section4">
    <ul>
      <li><FontAwesomeIcon icon={faCircle} />Credit and debit cards</li>
      <li><FontAwesomeIcon icon={faCircle} />Forex and prepaid cards</li>
      <li><FontAwesomeIcon icon={faCircle} />Credit on UPI, NCMC</li>
      <li><FontAwesomeIcon icon={faCircle} />Switching and embedded solutions</li>
    </ul>
  </div>
  );
}

export default NextgenStack;
