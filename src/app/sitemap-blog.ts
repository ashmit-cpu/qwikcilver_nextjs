import { wordpressUrl } from '@/Helpers/wordpressUrl';
import { MetadataRoute } from 'next';

const BaseUrl = "https://qwikcilver-nextjs.vercel.app";

// Define the WordPress URL

// Fetch all case studies directly in the sitemap file
async function fetchAllCaseStudies() {
  const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/case-study`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch case studies: ${response.statusText}`);
  }

  return await response.json(); // Assuming this returns an array of case studies
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes = [
    {
      url: `${BaseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BaseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BaseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${BaseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ];

  // Fetch dynamic case study routes directly in the sitemap file
  const caseStudyData = await fetchAllCaseStudies(); // Await the API call to fetch all case studies

  // Map over the case studies and generate sitemap entries
  const caseStudyRoutes = caseStudyData.map((caseStudy: { slug: string, modified: string }) => ({
    url: `${BaseUrl}/case-study/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.modified), // Use 'modified' for the last modified date
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Return combined static and dynamic routes
  return [...staticRoutes, ...caseStudyRoutes];
}
