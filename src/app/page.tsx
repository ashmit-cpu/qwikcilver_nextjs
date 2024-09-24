import Navbar from '@/components/common/Navbar/Navbar';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import { wordpressUrl } from '@/Helpers/wordpressUrl';
import axios from 'axios'; // Import axios

// Function to fetch data using axios
async function fetchHomePageData() {
  try {
    const response = await axios.get(`${wordpressUrl}wp-json/wp/v2/home-page/8`, {
      headers: {
        'Cache-Control': 'no-cache', // Equivalent to fetch's cache: 'no-cache'
      },
    });
    return response.data; // Axios returns the data directly in the `data` property
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error; // You can handle the error here as you need
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
