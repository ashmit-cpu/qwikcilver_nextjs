import React from "react";
import "../../styles/caseStudyIndivisual.css";
import Button from "@/components/ui-element/button";

export default function CaseStudyCta({ props }) {
  return (
    <div className="ctaCaseStudy">
      {props.acf.cta_heading && (
        <h4
          dangerouslySetInnerHTML={{
            __html: props.acf.cta_heading,
          }}
        />
      )}

      {props.acf.cta_description && (
        <p>{props.acf.cta_description}</p>
      )}

      <div className="flex justify-center mt-10">
        <Button content="More case studies" href="/contact" />
      </div>
    </div>
  );
}
