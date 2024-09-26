import React from "react";
import Image from "next/image";
import "../../../styles/footer.css";
import {
  FaLinkedinIn,
  FaTwitterSquare,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const footerData = {
  address: {
    heading: "Address",
    lines: [
      "#111, Brigade Manae Court, 1st Floor,",
      "5th Block, Koramangala, Bangalore",
      "560095",
    ],
  },
  about: {
    heading: "About Us",
    links: [{ name: "Our Story", url: "#" }],
  },
  solutions: {
    heading: "Solutions",
    links: [
      { name: "Prepaid Solutions", url: "#" },
      { name: "Engagement & Loyalty Solutions", url: "#" },
      { name: "Open Loop Prepaid Solutions", url: "#" },
      { name: "Card Issuing Solutions", url: "#" },
    ],
  },
  platform: {
    heading: "Platform",
    links: [
      { name: "Issuing", url: "#" },
      { name: "Processing", url: "#" },
      { name: "Distribution", url: "#" },
    ],
  },
  industries: {
    heading: "Industries",
    links: [
      { name: "Airlines", url: "#" },
      { name: "Hospitality", url: "#" },
      { name: "Travel (OTAs)", url: "#" },
      { name: "BFSI", url: "#" },
      { name: "Pharma", url: "#" },
      { name: "Consumer Goods", url: "#" },
      { name: "Retail", url: "#" },
      { name: "Fintech", url: "#" },
      { name: "Automobile", url: "#" },
      { name: "Agro-Chemical", url: "#" },
    ],
  },
  socialMediaLinks: [
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/" },
    { icon: <FaTwitterSquare />, url: "https://twitter.com/" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/" },
  ],
};

function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="">
      <Image
        src="/imgs/footer-Ellipse-min.png"
        className="footer_gradient"
        width={1400}
        height={243}
        alt="Footer Gradient"
      />
      <div className="container mx-auto ">
        <div className="flex">
          <div className="flex-1">
            <Image
              src="/imgs/QC_Logo_White.png"
              width={192}
              height={49}
              alt="Company Logo"
            />
          </div>
          <div className="flex-1 text-end">
            <div className="social_media">
              <ul>
                {footerData.socialMediaLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex mt-14">
          <div className="flex-auto w-96">
            <div className="footer_items">
              <h2>{footerData.address.heading}</h2>
              {footerData.address.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="flex-auto w-48">
            <div className="footer_items">
              <h2>{footerData.about.heading}</h2>
              <ul>
                {footerData.about.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-auto w-64">
            <div className="footer_items">
              <h2>{footerData.solutions.heading}</h2>
              <ul>
                {footerData.solutions.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-auto w-60">
            <div className="footer_items">
              <h2>{footerData.platform.heading}</h2>
              <ul>
                {footerData.platform.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-auto w-36">
            <div className="footer_items">
              <h2>{footerData.industries.heading}</h2>
              <ul>
                {footerData.industries.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex footer_policy">
          <div className="flex-1">
              <div className="policy_text">
                <ul>
                  <li><a href="">Our Policies</a></li>
                  <li><a href="">Legal</a></li>
                  <li><a href="">Privacy</a></li>
                  <li><a href="">FAQs</a></li>
                  <li><a href="">Report fraud / Unauthorised transaction</a></li>
                </ul>
              </div>
          </div>
          <div className="flex-1 policy_text text-end">
            <p>© {currentYear} Qwikcilver</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
