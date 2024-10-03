import React from "react";
import "../../styles/caseStudyIndivisual.css";
import CaseStudyCta from "@/components/caseStudyIndivisualPage/CaseStudyCta";


export default function CaseStudyIndividualPage({ data }) {
  return (
    <div className="CaseStudyIndividualPage container sec-padding px-0">
      <div className="md:flex gap-10">
        <div className="md:w-9/12 w-full caseStudDetail">
          <h1>{data.title.rendered}</h1>

          {data && (
            <div
              dangerouslySetInnerHTML={{
                __html: data.content.rendered,
              }}
            />
          )}


          <CaseStudyCta props={data}/>
          

          <h4 className="font-semibold text-2xl">Article written by</h4>
          
        </div>
        <div className="md:w-3/12">
          <h2>hjfg</h2>
        </div>
      </div>
    </div>
  );
}
