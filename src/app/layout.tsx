// import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import "./globals.css";
import { MenuProvider } from "../Context/menuProvider";
import { fetchHomePageData } from "./page";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seo = await fetchHomePageData();
  const yoastData = seo?.yoast_head_json;

  // Schema.org JSON-LD data with a more complex structure
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": yoastData?.canonical || `${seo.link}`,
        url: yoastData?.canonical || `${seo.link}`,
        name: yoastData?.title || "Default Title", // Set a default title if needed
        isPartOf: {
          "@id":
            yoastData?.canonical || `https://webominddev.co.in/qctest/#website`,
        },
        datePublished: yoastData?.datePublished,
        dateModified: yoastData?.dateModified,
        description: yoastData?.description || "Default description", // Set a default description if needed
        breadcrumb: {
          "@id": `${yoastData?.canonical || `${seo.link}`}#breadcrumb`,
        },
        inLanguage: yoastData?.og_locale || "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [yoastData?.canonical || `${seo.link}`],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${yoastData?.canonical || `${seo.link}`}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://webominddev.co.in/qctest/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: yoastData?.title || "Default Title", // Set a default title if needed
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `https://webominddev.co.in/qctest/#website`,
        url: "https://webominddev.co.in/qctest/",
        name: yoastData?.og_site_name || "Your Website",
        description: yoastData?.description || "Default website description",
        publisher: {
          "@id": `https://webominddev.co.in/qctest/#organization`,
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://webominddev.co.in/qctest/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: yoastData?.og_locale || "en-US",
      },
      {
        "@type": "Organization",
        "@id": `https://webominddev.co.in/qctest/#organization`,
        name: "Your Organization",
        url: "https://webominddev.co.in/qctest/",
        logo: {
          "@type": "ImageObject",
          inLanguage: yoastData?.og_locale || "en-US",
          "@id": `https://webominddev.co.in/qctest/#logo`,
          url:
            yoastData?.og_image || "https://webominddev.co.in/qctest/logo.png",
          contentUrl:
            yoastData?.og_image || "https://webominddev.co.in/qctest/logo.png",
          width: 716,
          height: 195,
          caption: "Your Organization",
        },
        image: {
          "@id": `https://webominddev.co.in/qctest/#logo`,
        },
        sameAs: ["https://www.facebook.com/your-organization"],
      },
    ],
  };
  return (
    <html lang="en">
      <MenuProvider>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </body>
      </MenuProvider>
    </html>
  );
}
