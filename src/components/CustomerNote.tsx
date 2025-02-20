"use client";
import React from "react";
import Image from "next/image";

export default function CustomerNote() {
  return (
    <section className="bg-secondary py-12 px-6 text-white">
      {/* Inner container for content */}
      <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg relative">
        {/* Top-left image */}
        <div className="width-[400px] h-[400px] absolute -top-40 -left-[250px] ">
          <Image
            src="/images/T2B-illustrations/15.png" // Change to your image path
            alt="Mother Daughter Duo"
            width={250}
            height={250}
            className="w-full h-full object-cover  rounded-md"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hey There Friends!</h2>
            <p className="text-lg leading-relaxed mb-4">
            We are a Mother-Daughter Duo offering custom cleaning solutions for your everyday needs. 
            Over the years, we’ve worked in public schools while running our Top To Bottom Cleaning Service during weekends, evenings, school breaks, and summers.
            </p>
            <p className="text-lg leading-relaxed mb-4">
            We truly love what we do—not just because we enjoy cleaning, but because it allows us to help busy families like yours.
             Whether you need a deep clean, move-in/move-out service, or just help keeping up with chores, we are here for you!
            </p>
          </div>

          {/* Right-side Image & Contact Button */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/T2B-illustrations/heroHome.png" // Change to your image path
              alt="Cleaning Service"
              width={400}
              height={400}
              className="rounded-lg "
            />
            {/* <a
              href="#contact"
              className="bg-secondary text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-primary transition"
            >
              Contact Us!
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
