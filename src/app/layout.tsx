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
        <main>
       {children}
       </main>
      </body>
    </html>
  );
}
