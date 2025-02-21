"use client";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>T2B Cleaning Services</title>
        <meta name="description" content="Professional cleaning services." />
        <link rel="icon" href="/TopToBottomCleaningServices/5.png" sizes="any" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ThemeProvider>
          <NavBar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
