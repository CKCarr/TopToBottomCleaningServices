"use client";
import React, { useState } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  // Close the popup when clicking outside the Contact box
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowContact(false);
    }
  };

  return (
    <section className="bg-secondary py-12 px-6 text-white">
      {/* Container for Centered Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 bg-white text-gray-900 p-8 rounded-lg shadow-lg relative">
        
        {/* Left Side - Main Text */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-light">
            Hey There Friends!
          </h2>
          <p className="text-lg leading-relaxed mb-4 ml-4">
            We are a Mother-Daughter Duo offering custom cleaning solutions for your everyday needs. 
            Over the years, we’ve worked in public schools while running our Top To Bottom Cleaning Service during weekends, evenings, school breaks, and summers.
          </p>
          <p className="text-lg leading-relaxed mb-4 ml-4">
            We truly love what we do—not just because we enjoy cleaning, but because it allows us to help busy families like yours.
            Whether you need a deep clean, move-in/move-out service, or just help keeping up with chores, we are here for you!
          </p>
          
          {/* Contact Button */}
          <div className="mt-6">
            <button 
              onClick={() => setShowContact(true)}
              className="rounded-md bg-secondary px-6 py-3 text-white text-lg font-semibold shadow-md hover:bg-primary transition"
            >
              Text Us Today
            </button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={`${basePath}/images/T2B-illustrations/heroHome.png`}
            alt="Cleaning Service"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Floating Top-Left Image */}
        <div className="hidden lg:block absolute -top-24 -left-24 w-40 h-40">
          <Image
            src={`${basePath}/images/T2B-illustrations/15.png`}
            alt="Mother Daughter Duo"
            width={160}
            height={160}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Contact Popup */}
      {showContact && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackgroundClick} // Close when clicking outside the modal
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 text-xl"
            >
              ✖
            </button>
            <Contact />
          </div>
        </div>
      )}
    </section>
  );
}
