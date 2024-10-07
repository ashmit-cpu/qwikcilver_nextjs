import React from "react";
import "../../../styles/caseStudyIndivisual.css";
import CaseStudyCta from "@/components/caseStudyIndivisualPage/CaseStudyCta/CaseStudyCta";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUserTie } from "@fortawesome/free-solid-svg-icons";
import CtaAuthor from "../CtaAuthor/CtaAuthor";
const RelatedPosts = dynamic(
  () =>
    import("@/components/caseStudyIndivisualPage/RelatedPosts/RelatedPosts"),
  { ssr: false }
);

function formatDate(dateString) {
  const options = { year: "numeric", month: "short" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  const [month, year] = formattedDate.split(" ");
  return `${month}, ${year}`;
}

export default function CaseStudyIndividualPage({ data }) {
  return (
    <div className="CaseStudyIndividualPage container sec-padding px-0">
      <div className="md:flex gap-20 align-middle">
        <div className="md:w-9/12">
          <div className="w-full content_wrapper">
            <h1>{data.title.rendered}</h1>

            <span className="author-n-date">
              <FontAwesomeIcon icon={faUserTie} /> Qwickcilver Blogs |{" "}
              <FontAwesomeIcon icon={faCalendarDays} />
              {formatDate(data.modified)}
            </span>

            {data && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content.rendered,
                }}
              />
            )}
          </div>
          <div className="w-full">
            <CaseStudyCta props={data} />

            <CtaAuthor />
          </div>
        </div>

        <div className="md:w-3/12 right-col sticky top-0 ">
          <RelatedPosts />
        </div>
      </div>
    </div>
  );
}
