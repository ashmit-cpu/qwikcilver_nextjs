// import type { Metadata } from "next";
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
      >
       {children}
       <script src="https://cdn.tailwindcss.com" async />
      </body>
    </html>
  );
}
