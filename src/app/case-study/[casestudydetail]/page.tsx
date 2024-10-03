

import { wordpressUrl } from '@/Helpers/wordpressUrl';
import React from 'react';
import CaseStudyIndividualPage from  "../../../components/caseStudyIndivisualPage/CaseStudyIndivisualPage";

async function fetchCaseStudyIndividual(slug: string) {
  const response = await fetch(`${wordpressUrl}wp-json/wp/v2/case-study?slug=${slug}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  
  const datas = await response.json();
  return datas[0];
}

async function CaseStudyDetail({params}:any) {
    const datas = await fetchCaseStudyIndividual(params.casestudydetail);
  return (
    <div>
       
        <CaseStudyIndividualPage data={datas}/>
    </div>
  )
}

export default CaseStudyDetail