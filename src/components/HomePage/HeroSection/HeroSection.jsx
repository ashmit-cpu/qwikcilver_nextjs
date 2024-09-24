import Link from "next/link";
import React from "react";
import '../../../styles/HeroSection.css'

function HeroSection({ data }) {
  // console.log(data)
  return (
    <section className="HeroSection">
      <div className="container sec_padding">
        <div className="flex flex-row">
          <div className="col left-col">
           {
            data &&  <h1>{data.acf.hero_section_title}</h1>
           }
            {
              data && <p>{data.acf.hero_section_paragraph}</p>
            }
            <Link href={"#"} className="primary_btn">Talk to Experts</Link>
          </div>
          <div className="col right-col">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
