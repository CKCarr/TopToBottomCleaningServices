"use client";
import React, { useState } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  /** Function to close modal when clicking outside */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowContact(false); // Close when clicking background
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-light shadow-md flex justify-between items-center px-4 sm:px-8 h-20">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image 
            src={`/images/Top2BottomLogos/xTextLogo.png`}
            alt="Logo" 
            width={200} 
            height={100} 
            className="w-32 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
          />
        </div>

        {/* Contact Button */}
        <button
          onClick={() => setShowContact(true)}
          className="bg-secondary text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-primary transition mr-6 sm:mr-10"
        >
          Contact Us
        </button>
      </nav>

      {/* Contact Popup (Click Outside to Close) */}
      {showContact && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick} // Close on clicking outside
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
