"use client";

import React, { useState } from "react";
import "../../../styles/NextgenStack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import OutlineButton from "@/components/ui-element/OutlineButton/OutlineButton";

function NextgenStack({ data }) {
  const [selectedButton, setSelectedButton] = useState("button-1");

  // Array to store button details and their corresponding content fetched from ACF fields
  const buttonContent = [
    {
      id: "button-1",
      title: data?.acf?.nextgen_button_1 || "",
      imgSrc: data?.acf?.nextgen_image_1?.link || "",
      points: data?.acf?.nextgen_bullet_points_1
        ? data.acf.nextgen_bullet_points_1.split("\r\n")
        : [],
      imgContent: data?.acf?.nextgen_image_content_1?.link || "",
      link: data?.acf?.nextgen_link_1?.url || "",
    },
    {
      id: "button-2",
      title: data?.acf?.nextgen_button_2 || "",
      imgSrc: data?.acf?.nextgen_image_2?.link || "",
      points: data?.acf?.nextgen_bullet_points_2
        ? data.acf.nextgen_bullet_points_2.split("\r\n")
        : [],
      imgContent: data?.acf?.nextgen_image_content_2?.link || "",
      link: data?.acf?.nextgen_link_2?.url || "",
    },
    {
      id: "button-3",
      title: data?.acf?.nextgen_button_3 || "",
      imgSrc: data?.acf?.nextgen_image_3?.link || "",
      points: data?.acf?.nextgen_bullet_points_3
        ? data.acf.nextgen_bullet_points_3.split("\r\n")
        : [],
      imgContent: data?.acf?.nextgen_image_content_3?.link || "",
      link: data?.acf?.nextgen_link_3?.url || "",
    },
    {
      id: "button-4",
      title: data?.acf?.nextgen_button_4 || "",
      imgSrc: data?.acf?.nextgen_image_4?.link || "",
      points: data?.acf?.nextgen_bullet_points_4
        ? data.acf.nextgen_bullet_points_4.split("\r\n")
        : [],
      imgContent: data?.acf?.nextgen_image_content_4?.link || "",
      link: data?.acf?.nextgen_link_4?.url || "",
    },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="NextgenStack">
      <div className="wrapper">
        <div className="flex sm:flex-row flex-col  justify-between">
          <div className="left-col sm:w-7/12 next-padding">
            <div className="content">
              {data?.acf?.nextgen_title && (
                <h2
                  dangerouslySetInnerHTML={{
                    __html: data?.acf?.nextgen_title || "",
                  }}
                />
              )}

              <p>{data?.acf?.nextgen_paragraph || ""}</p>
            </div>

            {/* Buttons */}
            <div className="buttons-wrapper">
              {buttonContent.map(
                (button) =>
                  button.title && (
                    <div className="button" key={button.id}>
                      <button
                        onClick={() => handleButtonClick(button.id)}
                        className={selectedButton === button.id ? "active" : ""}
                      >
                        {button.imgSrc && (
                          <img src={button.imgSrc} alt={button.title} />
                        )}
                        {/* <p>{button.title}</p> */}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: button.title,
                          }}
                        />
                      </button>
                    </div>
                  )
              )}
            </div>

            {/* Conditional Rendering of Content based on selectedButton */}
            <div
              className="button-content"
              data-aos="fade"
              data-aos-duration="1000"
            >
              {buttonContent
                .filter((button) => button.id === selectedButton)
                .map((button) => (
                  <div key={button.id}>
                    {button.points.length > 0 && (
                      <>
                        <ul>
                          {button.points.map((point, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={faCircle} /> {point}
                            </li>
                          ))}
                        </ul>
                        {button.link && (
                          <OutlineButton
                            content={"Know More"}
                            href={button.link}
                          />
                        )}
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="right-col sm:w-4/12">
            {buttonContent
              .filter(
                (button) => button.id === selectedButton && button.imgContent
              )
              .map((button) => (
                <img
                  key={button.id}
                  src={button.imgContent}
                  alt={button.title}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextgenStack;
