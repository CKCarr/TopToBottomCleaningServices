"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import { IconButton } from "@material-tailwind/react";
import Contact from "./Contact";

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Left Side - Logo Images */}
        <div className="flex">
          <img src="/images/5.png" alt="Logo" className="h-25 w-40" />
          <img src="/images/Top2BottomLogos/xTextLogo.png" alt="Logo 2" className="h-50 w-60" />
        </div>
        <button
          onClick={() => setShowContact(true)}
          className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary transition"
        >
          Contact Us
        </button>
      </nav>

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button onClick={() => setShowContact(false)} className="absolute top-2 right-2 text-xl">
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