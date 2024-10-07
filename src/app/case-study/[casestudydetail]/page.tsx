

import { wordpressUrl } from '@/Helpers/wordpressUrl';
import React from 'react';
import CaseStudyIndividualPage from  "@/components/caseStudyIndivisualPage/CaseStudyIndivisualPage/CaseStudyIndivisualPage";
import { Metadata } from 'next';
// import CtaAuthor from '@/components/caseStudyIndivisualPage/CtaAuthor/CtaAuthor'

async function fetchCaseStudyIndividual(slug: string) {
  const response = await fetch(`${wordpressUrl}wp-json/wp/v2/case-study?slug=${slug}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  
  const datas = await response.json();
  return datas[0];
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const seo = await fetchCaseStudyIndividual(params.casestudydetail);
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

async function CaseStudyDetail({params}:any) {
    const datas = await fetchCaseStudyIndividual(params.casestudydetail);
  return (
    <div>
       
        <CaseStudyIndividualPage data={datas}/>
        {/* <CtaAuthor/> */}
    </div>
  )
}

export default CaseStudyDetail