import React from "react";
import "../../../styles/RelatedPosts.css";
import { fetchCaseStudyPageData } from "@/app/case-study/page";
import Link from "next/link";

function formatDate(dateString) {
  const options = { year: "numeric", month: "short" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  const [month, year] = formattedDate.split(" ");
  return `${month}, ${year}`;
}

async function RelatedPosts() {
  let datas = [];

  try {
    // Fetch case study data
    const data = await fetchCaseStudyPageData();

    if (data) {
      // Shuffle and pick random 4 case studies
      const shuffledDatas = data.sort(() => 0.5 - Math.random());
      datas = shuffledDatas.slice(0, 4);
    }
  } catch (err) {
    console.error("Failed to fetch case studies:", err);
  }

  return (
    <div className="RelatedPosts">
      <h2>Related Posts:</h2>
      <div className="row">
        {datas.length > 0 ? (
          datas.map((data) => (
            <Link href={`/case-study/${data.slug}`}>
              <div className="card-container flex flex-row" key={data.id}>
                <div className="img-container">
                  {data.acf.case_study_image && (
                    <img
                      src={data.acf.case_study_image.sizes.medium}
                      alt={data.acf.name}
                    />
                  )}
                </div>
                <div className="content">
                  {data.title.rendered && (
                    <a href={`/case-study/${data.slug}`}>
                      {data.title.rendered}
                    </a>
                  )}
                  <p>
                    By {data.acf.edited_by} | {formatDate(data.modified)}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No related posts available.</p>
        )}
      </div>
    </div>
  );
}

export default RelatedPosts;
