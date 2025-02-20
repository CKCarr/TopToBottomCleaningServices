"use client";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>T2B Cleaning Services</title>
        <meta name="description" content="Professional cleaning services." />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ThemeProvider>
          <NavBar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
