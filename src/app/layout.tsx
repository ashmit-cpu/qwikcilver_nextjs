// import type { Metadata } from "next";
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
          <main>{children}</main>
        </body>
      </MenuProvider>
    </html>
  );
}
