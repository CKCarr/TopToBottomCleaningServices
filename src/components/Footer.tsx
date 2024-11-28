'use client';
import React from 'react';
import Image from "next/image";
import { Typography } from '@material-tailwind/react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-gray-100">
      <div className="container ">
        <div className="logos flex">
          <Image
            src="/images/5.png"
            alt="logo"
            width={300}
            height={0}
          />
          <Image
            src="/images/Top2BottomLogos/xTextLogo.png"
            alt="text-logo"
            width={400}
            height={200}
          />
        </div>
        <div className="flex">
          <Typography color="blueGray" className="text-center p-3 mx-5">
            Contact Us Today To Schedule a Service
          </Typography>
          <Image
              src="/images/window.svg"
              alt="window-logo"
              width={50}
              height={50}

          />
          <Image
              src="/images/globe.svg"
              alt="globe-logo"
              width={50}
              height={50}

          />
        </div>
      </div>


      <div className="container mx-auto px-4 lg:px-8 py-4">
        <Typography color="blueGray" className="text-center">
          &copy; {new Date().getFullYear()} Top B Cleaning Services. All rights reserved.
        </Typography>
      </div>
    </footer>
  )
}
// Compare this snippet from src/components/Footer.tsx:
