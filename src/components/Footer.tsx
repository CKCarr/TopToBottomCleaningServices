"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light shadow-md">
      {/* Footer Container */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Top Section - Logos & Contact */}
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between">
          {/* Left Side - Contact & Logos */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
          <Image 
              src="/images/Top2BottomLogos/yTextLogo.png" 
              alt="Text Logo" 
              width={400} 
              height={200} 
              className="w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto"
            />
            <Contact />

          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="py-2 text-center text-primary text-sm sm:text-md">
          &copy; {new Date().getFullYear()} TopToBottom Cleaning Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
