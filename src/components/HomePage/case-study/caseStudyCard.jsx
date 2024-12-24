import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import '@/styles/CaseStudy.css';  
import Link from "next/link";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="caseStudy_card">
      <div className="caseStudy_image">
        <img
          src={study.acf.case_study_image.url}
          width="485"
          height="290"
          alt={study.title.rendered}
          rel="noreferrer"
        />
      </div>
      <div className="caseStudy_content">
        <h2>
          {study.title.rendered && <Link href={`case-study/${study.slug}`}>{study.title.rendered}</Link>}
          
        </h2>
        <p>{study.acf.case_study_description}</p>

        <Link href={`case-study/${study.slug}`} className="Case_study_btn">
          View Case Study <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;