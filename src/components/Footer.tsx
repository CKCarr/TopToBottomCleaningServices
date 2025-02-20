"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light shadow-md">
      {/* Footer Container */}
      <div className="max-w-6xl mx-auto px-1 py-2">
        {/* Top Section - Logos */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Logo Images */}
          <div className="flex items-center space-x-4">
            <Image src="/images/5.png" alt="Logo" width={400} height={200} />
            <Contact />
            <Image src="/images/Top2BottomLogos/xTextLogo.png" alt="Text Logo" width={400} height={200} />
          </div>
        </div>
              {/* Bottom Section - Copyright */}
        <div className="py-1">
        <div className="text-center text-primary mb-5">
          &copy; {new Date().getFullYear()} TopToBottom Cleaning Services. All rights reserved.
        </div>
      </div>
      </div>



    </footer>
  );
}
