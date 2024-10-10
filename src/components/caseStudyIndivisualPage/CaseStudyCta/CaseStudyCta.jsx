import React from "react";
// import "../../../styles/caseStudyIndivisual.css";
import Button from "@/components/ui-element/button";
import '../../../styles/CaseStudyCta.css';

export default function CaseStudyCta({ props }) {

  console.log("props data: .....", props);

  
  if (!props.acf.cta_heading && !props.acf.cta_description) return null;


  return (
    <div className="ctaCaseStudy">
      {props?.acf?.cta_heading && (
        <h4
          dangerouslySetInnerHTML={{
            __html: props.acf.cta_heading,
          }}
        />
      )}

      {props?.acf?.cta_description && (
        <p>{props.acf.cta_description}</p>
      )}

      <div className="flex justify-center mt-10">
        <Button content="More case studies" href="/contact" />
      </div>
    </div>
  );
}
