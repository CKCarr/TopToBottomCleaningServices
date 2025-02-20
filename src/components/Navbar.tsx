"use client";
import React, { useState } from "react";
import Image from "next/image";
import Contact from "./Contact";

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-light shadow-md flex justify-between items-center  h-24">
        {/* Left Side - Smaller Logo Images */}
        <div className="flex items-center pr-8"> 
          {/* <Image 
            src="/images/5.png" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="h-40 w-auto object-contain"
          /> */}
          <Image 
            src="/images/Top2BottomLogos/xTextLogo.png" 
            alt="Logo 2" 
            width={90} 
            height={50} 
            className="h-80 w-auto object-contain mr-32 pr-32"
          />
        </div>

        {/* Contact Button */}
        <button
          onClick={() => setShowContact(true)}
          className="bg-secondary text-white px-3 py-1 rounded-lg text-lg font-semibold shadow-md hover:bg-primary transition"
        >
          Contact Us
        </button>
      </nav>

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
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
    </>
  );
};

export default Navbar;
