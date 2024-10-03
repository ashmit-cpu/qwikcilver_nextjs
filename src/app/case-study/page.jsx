import { wordpressUrl } from "../../Helpers/wordpressUrl";
import CaseStudy from "@/components/HomePage/case-study/CaseStudy";
import CaseStudyCard from "@/components/HomePage/case-study/caseStudyCard";
import "@/styles/CaseStudy.css";
// import { fetchHomePageData } from "../page";

export async function fetchCaseStudyPageData() {
  try {
    const res = await fetch(`${wordpressUrl}wp-json/wp/v2/case-study`, {
      cache: "no-cache",
    });

    // console.log("Response object:", res);

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const datas = await res.json();
    // console.log("Parsed JSON data:", datas);
    return datas;
  } catch (error) {
    console.error("Error fetching Case study data:", error);

    return null; // Handle failure by returning null
  }
}

// Function to generate metadata
export async function generateMetadata() {
  const datas = await fetchCaseStudyPageData();

  if (!datas) {
    return {
      title: "Default Title",
      description: "Default description",
    };
  }

  return {
    title: datas?.title?.rendered || "Default Title",
    description: datas?.acf?.meta_description || "Default description",
  };
}

// The Home component is now async because you're fetching data in the component itself
async function CaseStudyPage() {
  const datas = await fetchCaseStudyPageData();
  //   const homepagedata = await fetchHomePageData();

  console.log("Fetched Case Study Data:", datas);

  return (
    <>
    <section className="breadcrumb pt-24  absolute  top-0 bg-slate-50 z-0 w-full">
        <div className="container sec-padding">
            <h1>Case Studies</h1>
            <p>Discover our latest projects and client testimonials.</p>
  
        </div>
    </section>
      <div className="container CaseStudyPage mt-16 case_study sec-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {datas.map((study, index) => (
            <div key={index}>
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CaseStudyPage;
