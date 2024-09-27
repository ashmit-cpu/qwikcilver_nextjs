import React from "react";
import "../../../styles/industry.css";
import Button from "@/app/ui-element/button";
import IndustrySlides from "./industrySlides";

export default function Industry() {
  return (
    <>
      <div className="container industry_sec">
        <div className="flex">
          <div className="w-1/2">
            <h2>
              In with every
              <span> industry.</span>
            </h2>
            <p className="mt-5">
              Unlock growth, engagement and loyalty with solutions <br />{" "}
              tailored for your industry.
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end mt-10">
              <Button content="Know more" href="javascript:void();" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <IndustrySlides />
      </section>
    </>
  );
}
