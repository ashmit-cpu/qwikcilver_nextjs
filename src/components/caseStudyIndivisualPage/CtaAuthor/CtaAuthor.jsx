import React from "react";
import "../../../styles/CtaAuthor.css";

export default function CtaAuthor() {
  return (
    <div className="CtaAuthor rounded-xl">
      <div className="heading container py-0 my-0">
        <h4 className="font-semibold text-2xl">Article written by</h4>
      </div>
      <div className="container bg-slate-100 sec-padding mb-3 rounded-xl">
        <div className="flex gap-10  ">
          <div className="image-container w-3/12">
            <img
              src="https://www.qwikcilver.com/wp-content/uploads/2024/05/QC_Favicon.png"
              alt="author"
            />
          </div>
          <div className="w-9/12 content_wrapper">
            <div className="content">
              <h3>Qwikcilver Blogs</h3>
              <p>
                We are a fintech expert with a focus on corporate gifting,
                prepaid cards, and customer loyalty. As a key contributor at
                Qwikcilver, we share insights on how innovative solutions can
                help businesses strengthen customer engagement and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
