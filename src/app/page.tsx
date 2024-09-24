import Navbar from '@/components/common/Navbar/Navbar';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import { wordpressUrl } from '@/Helpers/wordpressUrl';

// Function to fetch data using the Fetch API
async function fetchHomePageData() {
  try {
    const res = await fetch(`${wordpressUrl}wp-json/wp/v2/home-page/8`, {
      headers: {
        'Cache-Control': 'no-cache', // Equivalent to axios' 'no-cache' behavior
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const datas = await res.json(); // Fetch's way of getting JSON response
    return datas;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
}

// Function to generate metadata
export async function generateMetadata() {
  try {
    const datas = await fetchHomePageData();

    return {
      title: datas?.title?.rendered || 'Default Title',
      description: datas?.acf?.meta_description || 'Default description',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Default Title',
      description: 'Default description',
    };
  }
}

// The Home component is now async because you're fetching data in the component itself
async function Home() {
  const datas = await fetchHomePageData();

  return (
    <div className="Home">
      <Navbar />
      <HeroSection data={datas} />
    </div>
  );
}

export default Home;
