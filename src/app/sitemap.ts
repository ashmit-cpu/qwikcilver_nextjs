
import { MetadataRoute } from 'next';

const BaseUrl = "https://qwikcilver-nextjs.vercel.app/"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
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
    // Add more routes as you define them
  ]
}

