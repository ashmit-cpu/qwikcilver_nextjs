// import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import "./globals.css";
import { MenuProvider } from "../Context/menuProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <MenuProvider>
        <body>
        <Navbar />

          <main>{children}</main>
        <Footer />

        </body>
      </MenuProvider>
    </html>
  );
}
