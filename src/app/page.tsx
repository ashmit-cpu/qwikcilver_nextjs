import Navbar from '@/components/common/Navbar/Navbar';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import CaseStudy from '@/components/HomePage/case-study/CaseStudy';
import { wordpressUrl } from '@/Helpers/wordpressUrl';

async function fetchHomePageData() {
  const res = await fetch(`${wordpressUrl}wp-json/wp/v2/home-page/8`, {
    cache: 'no-cache',
  });
  const datas = await res.json();
  return datas; 
}

// Function to generate metadata
export async function generateMetadata() {
  const datas = await fetchHomePageData();

  return {
    title: datas?.title?.rendered || 'Default Title',
    description: datas?.acf?.meta_description || 'Default description',
  };
}

// The Home component is now async because you're fetching data in the component itself
async function Home() {
  const datas = await fetchHomePageData(); 

  return (
    <div className="Home">
      {/* <Navbar /> */}
      <HeroSection data={datas} />
      <CaseStudy />
    </div>
  );
}

export default Home;
