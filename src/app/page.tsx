import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import CaseStudy from "@/components/HomePage/case-study/CaseStudy";
import Form from "@/components/HomePage/form/Form";
import Industry from "@/components/HomePage/Industry/industry";
import CounterSection from "@/components/HomePage/CounterSection/CounterSection";
import BrandThatLove from "@/components/HomePage/BrandThatLove/BrandThatLove";
import NextgenStack from "@/components/HomePage/NextgenStack/NextgenStack";
import UseCases from "@/components/HomePage/UseCases/UseCases";
import { wordpressUrl } from "@/Helpers/wordpressUrl";
import { Metadata } from "next";
import { fetchCaseStudyPageData } from './case-study/page';


// Fetch HomePage data from REST API
export async function fetchHomePageData() {
  try {
    const res = await fetch(`${wordpressUrl}/wp-json/wp/v2/home-page/8`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const datas = await res.json();
    return datas;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchHomePageData();
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


// The Home component
export default async function Home() {
  const datas = await fetchHomePageData();
  const CaseStudyPageData = await fetchCaseStudyPageData();

  
  return (
    <div className="Home">
      
      <HeroSection data={datas} />
      <CounterSection data={datas} />
      <BrandThatLove data={datas} />
      <NextgenStack data={datas} />
      <UseCases data={datas} />
      <Industry />
      <Form />
      <CaseStudy data={datas} caseStudyData={CaseStudyPageData} />

    </div>
  );
}
