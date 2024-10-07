import { wordpressUrl } from "../../Helpers/wordpressUrl";
import CaseStudy from "@/components/HomePage/case-study/CaseStudy";
import CaseStudyCard from "@/components/HomePage/case-study/caseStudyCard";
import "@/styles/CaseStudy.css";
import BreadCrumb from '@/components/CaseStudyPage/BreadCrumb/BreadCrumb';
import { Metadata } from "next";
import { Key } from "react";

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
export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchCaseStudyPageData();
  const yoastData = seo?.yoast_head_json;

  return {
    title: yoastData?.title,
    description: yoastData?.description,
    robots: {
      index: yoastData?.robots?.index === "index",
      follow: yoastData?.robots?.follow === "follow",
    },
    alternates: {
      canonical: yoastData?.canonical,
    },
    openGraph: {
      title: yoastData?.og_title || yoastData?.title,
      description: yoastData?.og_description || yoastData?.description,
      url: yoastData?.og_url || yoastData?.canonical,
      siteName: yoastData?.og_site_name,
      type: yoastData?.og_type || "website",
      locale: yoastData?.og_locale || "en_US",
    },
    twitter: {
      card: yoastData?.twitter_card || "summary_large_image",
    },
    
  };
}

// The Home component is now async because you're fetching data in the component itself
async function CaseStudyPage() {
  const datas = await fetchCaseStudyPageData();
  //   const homepagedata = await fetchHomePageData();

  console.log("Fetched Case Study Data:", datas);

  return (
    <>
    <BreadCrumb/>
      <div className="container CaseStudyPage mt-16 case_study sec-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {datas.map((study: any, index: Key) => (
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
