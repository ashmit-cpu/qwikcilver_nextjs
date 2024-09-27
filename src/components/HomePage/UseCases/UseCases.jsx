"use client";

import React, { useState, useRef } from "react";
import "../../../styles/UseCases.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";

function UseCases({ data }) {
  const buttonsWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // To track the active button

  // Array of button labels
  const useCaseButtons = data?.acf?.usecase_buttons
    ? data.acf.usecase_buttons.split("\n")
    : [];

  // Function to dynamically fetch the image based on activeIndex
  const getDynamicImage = (index) => {
    return data?.acf?.[`usecase_image_${index + 1}`]?.link || ""; // Fetch the image URL dynamically
  };

  // Function to dynamically fetch the icon based on activeIndex
  const getDynamicIcon = (index) => {
    return data?.acf?.[`usecase_icon_${index + 1}`]?.link || ""; // Fetch the icon URL dynamically
  };

  // Function to dynamically fetch the subheading based on activeIndex
  const getDynamicSubheading = (index) => {
    return data?.acf?.[`usecase_subheading_${index + 1}`] || ""; // Fetch the subheading dynamically
  };

  // Function to dynamically fetch the list items and split by new line
  const getDynamicListItems = (index) => {
    return data?.acf?.[`usecase_listitems_${index + 1}`]
      ? data.acf[`usecase_listitems_${index + 1}`].split("\n")
      : []; // Fetch and split list items dynamically
  };

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
              {data && (
                <h2
                  dangerouslySetInnerHTML={{
                    __html: data.acf.usecases_title || "",
                  }}
                />
              )}
            </div>
            <div className="col sm:w-4/12">
              {data.acf.usecases_paragraph && <p>{data.acf.usecases_paragraph}</p>}
            </div>
          </div>
        </div>

        <div className="btn-carousel">
          <div className="buttons-wrapper" ref={buttonsWrapperRef}>
            {useCaseButtons.map((btnLabel, index) => (
              <button
                className={`btn-tab ${index === activeIndex ? "active" : ""}`} // Add 'active' class if the index matches the activeIndex
                key={index}
                onClick={() => handleButtonClick(index)} // Update activeIndex when button is clicked
              >
                {btnLabel}
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
                  src={getDynamicImage(activeIndex)} // Dynamically change image based on activeIndex
                  alt="content-img"
                />
              </div>
            </div>
            <div className="right-col sm:w-5/12">
              <div className="content">
                <img
                  src={getDynamicIcon(activeIndex)} // Dynamically change icon based on activeIndex
                  alt="content-icon"
                />
                {/* Dynamically render subheading */}
                <h3>{getDynamicSubheading(activeIndex)}</h3>
                <ul>
                  {getDynamicListItems(activeIndex).map((item, i) => (
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
